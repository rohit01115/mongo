const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function updateData() {
    try {
        await client.connect();
        console.log("Connected");

        const db = client.db("mongo");
        const collection = db.collection("users");

        // UPDATE DATA
        const result = await collection.updateOne(
            { name: "Rohit" },          // filter
            { $set: { age: 25 } }      // new value
        );

        console.log("Updated:", result.modifiedCount);

    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

updateData();