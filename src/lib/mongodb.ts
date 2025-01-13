import { MongoClient, MongoClientOptions } from 'mongodb';
import { TestRecord } from '../types/result';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

let client;
let clientPromise: Promise<MongoClient>;

async function initializeDatabase(client: MongoClient) {
  try {
    const db = client.db('mbti_test');
    
    // 检查集合是否存在，如果不存在则创建
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    if (!collectionNames.includes('test_records')) {
      await db.createCollection('test_records');
      console.log('Created test_records collection');
      
      // 创建索引
      const collection = db.collection<TestRecord>('test_records');
      await collection.createIndex({ username: 1 }, { unique: true });
      console.log('Created index on username field');
    }
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect().then(async (client) => {
      await initializeDatabase(client);
      return client;
    });
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then(async (client) => {
    await initializeDatabase(client);
    return client;
  });
}

export default clientPromise; 