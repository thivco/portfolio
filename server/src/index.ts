import { Hono } from 'hono'
import { MongoClient } from 'mongodb'

  
  const client = new MongoClient('mongodb://'+ process.env.MONGO_INITDB_ROOT_USERNAME + ":" + process.env.MONGO_INITDB_ROOT_PASSWORD +'@localhost:27017');
  // await client.connect();
  const db = client.db('Testing');
  const collection = db.collection('comments');
  
  collection.insertOne({ key: 'value' });
  
  const docs = collection.find().toArray();

  console.log(docs);
  

const app = new Hono()

app.get('/', (c) => c.text('Hello Bun!'))
export default {
  port: 8585,
  fetch: app.fetch,
}