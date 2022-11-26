const express = require('express');

var cors = require('cors');

var db;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://treebird1982:ZnPh7eLOMEWgpnvm@cluster0.vqq8hhk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("fantasyminton").collection("players");
  // perform actions on the collection object
});


const port = 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  var db;
  db = client.db('fantasyminton');
  db.collection('players').find().toArray(function(err, data) {
    return res.json(data);
  })
  
})

MongoClient.connect(uri, function(에러, client){
  if (에러) return console.log(에러)
  app.listen(port, function() {
    console.log(`listening on ${port}`)
  })
})

