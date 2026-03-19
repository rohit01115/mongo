const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/mongo";
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

connectDB();
