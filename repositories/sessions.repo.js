import { client } from "../db/supabase.js";
import { db } from "../db/mongoDB.js";
import { ObjectId } from "mongodb";


const users = db.collection("users");



async function addSessionToStudent(sessionId, studentId) {
    try {
        const insert = await users.findOneAndUpdate({ _id: new ObjectId(studentId) }, { $push: { labSessionsIds: sessionId } });
        return await users.countDocuments({ labSessionsIds: sessionId });
    } catch (error) {
        console.error(error);
    }
}


async function getSessionById(sessionId) {
    try {
        const { data } = await client.from("lab_sessions").select("*").eq("id", sessionId).select().single();
        const registeredCount = await users.countDocuments({ labSessionsIds: sessionId });
        const remainingSpots = data.capacity - registeredCount;
        data.registeredCount = registeredCount;
        data.remainingSpots = remainingSpots;
        return data;
    } catch (error) {

    }

}



