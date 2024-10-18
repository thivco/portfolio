import { Hono } from 'hono'
import { MongoClient } from 'mongodb'
import { cors } from "hono/cors"


const app = new Hono()


const client = new MongoClient('mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ":" + process.env.MONGO_INITDB_ROOT_PASSWORD + '@localhost:27017');
const db = client.db('Testing');
const collection = db.collection('comments');


app.use(
  cors({
    origin: 'http://localhost:9595'
  })
);

client.connect()
  .then(() => {
    console.log("Connection succes yes ?");

  })


collection.insertOne({ key: 'value' });

const docs = collection.find().toArray();

console.log(docs);


app.post("/api/submit", async (c) => {
  console.log("CORS activated");
  try {
    const formData = await c.req.json();
    const { email, description } = formData;
    console.log('Received data:', formData);

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