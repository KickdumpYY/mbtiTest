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
        const records = await collection
          .find({ username })
          .sort({ lastUpdated: -1 })
          .toArray();
        return res.status(200).json(records);

      case 'POST':
        const { username: newUsername, ...data } = req.body;
        if (!newUsername) {
          return res.status(400).json({ error: 'Username is required' });
        }

        const now = new Date();
        const newRecord = {
          username: newUsername,
          ...data,
          startedAt: data.startedAt || now,
          lastUpdated: now,
          completedAt: data.completed ? (data.completedAt || now) : undefined,
        };

        await collection.insertOne(newRecord);
        return res.status(200).json(newRecord);

      case 'PUT':
        const { username: updateUsername, ...updateData } = req.body;
        if (!updateUsername) {
          return res.status(400).json({ error: 'Username is required' });
        }

        // 查找最新的未完成记录
        const latestRecord = await collection
          .find({ 
            username: updateUsername,
            completed: false 
          })
          .sort({ lastUpdated: -1 })
          .limit(1)
          .toArray();

        if (latestRecord.length === 0) {
          return res.status(404).json({ error: 'No incomplete record found' });
        }

        const updatedRecord = {
          ...updateData,
          lastUpdated: new Date(),
        };

        await collection.updateOne(
          { _id: latestRecord[0]._id },
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