import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import noteApi from "./note/NoteAPI.js";
import {MongoClient} from "mongodb";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET)); //Cookie secret to do some simple authentication PLASSER I EN ENV FIL


app.use(express.static("../client/dist"));

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db("weboggapi");

app.use("/api/v1", noteApi(db));


app.listen(process.env.PORT || 2000, () => {
    console.log(`Server is running`);
});

export default app;