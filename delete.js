const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function deleteData() {
    try {
        await client.connect();
        console.log("Connected");

        const db = client.db("mongo");
        const collection = db.collection("users");

        const result = await collection.deleteOne({
            age: 21
        });

        console.log("Deleted:", result.deletedCount);

    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

deleteData();