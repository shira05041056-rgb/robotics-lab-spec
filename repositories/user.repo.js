import { db } from "../db/mongoDB.js";
import { ObjectId } from "mongodb";

const users = db.collection("users");

async function createUser(user) {
    try {
        const res = await users.insertOne(user);
        user._id = res.insertedId;
        return user;
    } catch (error) {
        console.error(error);
    }
}


async function getUserById(_id) {
    try {
        const user = users.findOne({ _id: new ObjectId(_id) });
        return user;
    } catch (error) {
        console.error(error);
    }

}

