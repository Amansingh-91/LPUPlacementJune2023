// Mongodb uses BSON 
// BSON is similar to JSON 
// database is called database
// tables are called collections
// rows are called documents
// columns are called fields

// imports
const express = require("express");
const {MongoClient} = require("mongodb");

// my env
const PORT =3000;
const database = "LPU-placement";
const dbURL = "mongodb://localhost:27017";

// creating mongo client


// creating connection
const getData = async()=>{
    //make connection
    const client = await MongoClient.connect(dbURL);
    const db = client.db(database);
    const usercollection = db.collection("users");
    // const inserted = await usercollection.insertOne({username:"AmanSaini123",password:"12345678Aman"});
    // console.log(inserted);
    const getuser = await usercollection.find({username:"AmanSaini123"}).toArray();
    console.log(getuser);
    // console.log(await usercollection.find());
} 

// express app
const app = express();
app.use(express.json())

getData();


// listening to server
app.listen(PORT,()=>{
    console.log(`listening on port:${PORT}`);
})