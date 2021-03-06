const express = require('express');
const app = express();
const port = 5500;
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

//MongoDB Connection Link
const url = 'mongodb://localhost:27017';

//Database Name
const dbName = 'dataCollections'; 

//Mongo Client
const client = new MongoClient(url, dbName);

//Connection method to connect to the server
client.connect(function(err) {
  assert.equal(null, err); 
  console.log("Connected successfully to server");

  const db = client.db(dataCollections);

  client.close(); 

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  app.get('/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
      const db = client.db('#');
      const collection = db.collection('#');
  
      collection.find({}).toArray((error, documents) => {
        client.close();
        res.render('index', { documents: documents });
      });
    });
  });
});

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('home', {})
});


