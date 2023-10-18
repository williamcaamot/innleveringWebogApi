import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//const uri = "mongodb://localhost:27017/"; // Local docker
const client = new MongoClient(process.env.MONGODB_URI);


let notesCollection;

const connect = async () => {
    await client.connect();
    const db = client.db("weboggapi");
    notesCollection = db.collection("notes");
}

const getNotesCollection = () => {
    return mealsCollection;
}

export { connect, notesCollection, getNotesCollection };



