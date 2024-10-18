import { Hono } from 'hono'
import { MongoClient } from 'mongodb'
import { cors } from "hono/cors"

// This is the way to get env variables I believe, check if dotenv is needed
import dotenv from "dotenv"
dotenv.config()

const app = new Hono()
app.use(
  cors({
    origin: 'http://localhost:9595'
  })
);

// const client = new MongoClient('mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ":" + process.env.MONGO_INITDB_ROOT_PASSWORD + '@localhost:27017');-
const URI = "mongodb://" + process.env.MONGO_INITDB_ROOT_USERNAME + ":" + process.env.MONGO_INITDB_ROOT_PASSWORD + "@mongodb:27017/Testing"
// Here using mongodb instead of localhost as its a container
const client = new MongoClient(URI);
const db = client.db('Testing');
const collection = db.collection('comments');

app.post("/api/submit", async (c, next) => {
  console.log("CORS activated");
  console.log(URI, "URI");

  try {
    const formData = await c.req.json();
    const { email, description } = formData;
    console.log('Received data:', formData);
    try {
     await client.connect();
     await collection.insertOne(formData)
     c.status(200)
    } catch (error) {
      console.error("Data received, but couldn't send it to the database:", error);

    }
    return c.json({
      message: 'Data received successfully',
      data: { email, description }
    }, 200);
  } catch (error) {
    console.error('HONO ! Error :', error);
    return c.json({ error: 'Failed to process data' }, 500);
  }
}
)

app.get('/', (c) => c.text('Hello Bun!'))
export default {
  port: 8585,
  fetch: app.fetch,
}