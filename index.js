const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sgq11wr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const database = client.db("Pro-adda");
    const postCollection = database.collection("post");
    // create a document to insert

    app.post("/post", async (req, res) => {
      const post = req.body;
      const result = await postCollection.insertOne(post);
      res.send(result);
    });



    app.get("/post", async (req, res) => {
      const query= {}
      const cursor = postCollection.find(query)
          const result = await cursor.toArray();
      res.send(result);
    });


    app.get("/personalpost", async (req, res) => {
      const uid =req.query.email;
      const query = {userEmail:uid};
      const cursor = postCollection.find(query);
      const result = await cursor.toArray();
      console.log(result);
      console.log(query);
      res.send(result);
    });










  } finally {
  }
}

run().catch(console.dir);





app.get("/", (req, res) => {
  res.send("server is working");
});
app.listen(port, () => {
  console.log("server is working", port);
});
