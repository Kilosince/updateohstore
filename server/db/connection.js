import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.ATLAS_URI || "";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("test").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  console.log(client.db("test").collection("menus"));
} catch (err) {
  console.error(err);
}

let db = client.db("test").collection("menus");


export default db;