const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function findData() {
    try {
        await client.connect();

        const db = client.db("mongo");
        const collection = db.collection("users");

        const data = await collection.find().toArray();
        console.log("Data:", data);

    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

findData();