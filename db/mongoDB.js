import {MongoClient, ObjectId} from "mongodb"

const client = new MongoClient(process.env.MONGODB_URL)

try {
    await client.connect()
    console.log("mongoDB connected")
} catch (error) {
    console.log("Failed connect to mongoDB:", error)
    process.exit(1)
}

const db = client.db("students")
export {db}
