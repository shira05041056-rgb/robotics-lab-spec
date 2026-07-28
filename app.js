import express from "express";
import dotenv from "dotenv/config";
import usersRouter from "./routes/users.router.js"
import sessionsRouter from "./routes/sessions.router.js"


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use("/users", usersRouter)
app.use("/sessions", sessionsRouter)



app.listen(PORT, (e) => {
    if (e) return console.log(e);
    console.log(`Server is running on port ${PORT}`);
});