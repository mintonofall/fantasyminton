const express = require('express');


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://treebird1982:ZnPh7eLOMEWgpnvm@cluster0.vqq8hhk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


const port = 4000;

const app = express();

app.get("/", (req, res) => {

  res.json(players);
  
})

MongoClient.connect(uri, function(에러, client){
  if (에러) return console.log(에러)
  app.listen(port, function() {
    console.log(`listening on ${port}`)
  })
})

