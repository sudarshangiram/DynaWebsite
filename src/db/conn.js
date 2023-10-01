const mongoose = require("mongoose");

// Connecting a database
mongoose.connect("mongodb://sudarshangiram20:sudarshangiram20@ac-3mctv0g-shard-00-00.kodtmkv.mongodb.net:27017,ac-3mctv0g-shard-00-01.kodtmkv.mongodb.net:27017,ac-3mctv0g-shard-00-02.kodtmkv.mongodb.net:27017/?ssl=true&replicaSet=atlas-xft5qs-shard-0&authSource=admin&retryWrites=true&w=majority").then(() => {
  console.log("database connected")}).catch((err) => {
  console.log("error while connecting to database",err)
})