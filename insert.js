const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function insertData() {
    try {
        console.log("Starting..."); // debug

        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("mongo");
        const collection = db.collection("users");

        const result = await collection.insertOne({
            name: "Rohit",
            age: 21
        });

        console.log("Inserted ID:", result.insertedId);

    } catch (err) {
        console.log("Error:", err);
    } finally {
        await client.close();
        console.log("Finished");
    }
}

insertData();