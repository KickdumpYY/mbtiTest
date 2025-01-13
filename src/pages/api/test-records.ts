import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { TestRecord } from '../../types/result';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db('mbti_test');
    const collection = db.collection<TestRecord>('test_records');

    switch (req.method) {
      case 'GET':
        const { username } = req.query;
        if (!username) {
          return res.status(400).json({ error: 'Username is required' });
        }
        const record = await collection.findOne({ username });
        return res.status(200).json(record || null);

      case 'POST':
        const { username: newUsername, ...data } = req.body;
        if (!newUsername) {
          return res.status(400).json({ error: 'Username is required' });
        }

        const now = new Date();
        const newRecord: TestRecord = {
          username: newUsername,
          ...data,
          startedAt: now,
          lastUpdated: now,
          completed: false,
        };

        await collection.updateOne(
          { username: newUsername },
          { $set: newRecord },
          { upsert: true }
        );
        return res.status(200).json(newRecord);

      case 'PUT':
        const { username: updateUsername, ...updateData } = req.body;
        if (!updateUsername) {
          return res.status(400).json({ error: 'Username is required' });
        }

        const updatedRecord = {
          ...updateData,
          lastUpdated: new Date(),
        };

        await collection.updateOne(
          { username: updateUsername },
          { $set: updatedRecord }
        );
        return res.status(200).json(updatedRecord);

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
} 