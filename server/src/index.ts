import { Hono } from 'hono'
import { cors } from "hono/cors"
import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from "dotenv"

dotenv.config()
console.log("Username mdr", process.env.MONGO_INITDB_ROOT_USERNAME, process.env.MONGO_ATLAS_PASSWORD)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const URI = "mongodb+srv://" + process.env.MONGO_ATLAS_USERNAME + ":" + process.env.MONGO_ATLAS_PASSWORD + "@folio.xlydv.mongodb.net/?retryWrites=true&w=majority&appName=Folio"
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// This is the way to get env variables I believe, check if dotenv is needed

const app = new Hono()
app.use(
  cors({
    origin: 'http://localhost:9595'
  })
);

// const URI = "mongodb://" + process.env.MONGO_INITDB_ROOT_USERNAME + ":" + process.env.MONGO_INITDB_ROOT_PASSWORD + "@mongodb:27017/Testing"
// Here using mongodb instead of localhost as its a container
// const client = new MongoClient(URI);
const db = client.db('Portfolio');
const collection = db.collection('comments');
console.log("The URI", URI)
console.log(URI);


// app.use("/api/comments", async (c, next) => {
//   console.log("Hi !");
//   await next()
// })


app.get("/api/comments", async (c) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return c.json({test:"ok"})
  }
  catch(e){
    console.error("Erroring", e);
    
    // return("C'est surement le db admin la"+ e)
  } 
  finally {
    // Ensures that the client will close when you finish/error
  }
  console.log("Mdrrrr aled");
})




// app.get("/api/comments", async (c) => {

//   try {
//     await client.connect();
//     // const databasesList = await client.db().admin().listDatabases();
    
//     // databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//     // const COMMENTS = await collection.find().limit(50).toArray();
//     // console.log(COMMENTS, "The comments");
//     // return c.json(COMMENTS)
//     await client.db("admin").command({ping:1});

    
//   } catch (error) {
//     console.error("Error when fetching the comments in the back :", error);  
//     return c.json({ error: 'Error fetching comments' }, 500);
//   }
//   finally {
//     await client.close()
//     console.log("Client closed");
    
//   }

// })

app.post("/api/submit", async (c) => {
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