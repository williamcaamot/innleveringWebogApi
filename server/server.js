import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import * as db from "./db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET)); //Cookie secret to do some simple authentication PLASSER I EN ENV FIL

//////////////////////////////////////////////////////
///////// API ENDPOINTS GO HERE               ////////
//////////////////////////////////////////////////////



let items = [
  { id: 0, title: "First note", content: " This is the first note" },
  { id: 1, title: "Second note", content: " This is the second note" },
];

app.get("/api/v1/note", async(req, res) => {
  console.log("Someone gett meals from DB");
  const data = db.getNotesCollection();
  const notes = await data.find().toArray();
  res.json(notes);
  console.log(`[IP: ${req.ip} REFERRER: ${req.referrer}] got all meals`)
});

app.post("/api/v1/note", async (req, res) => {
  const notescollection = db.getNotesCollection();
  const newNote = {
    id: items.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  const result = await notescollection.insertOne(newNote);


  items.push(newNote);
  res.json(newNote);
});




//////////////////////////////////////////////////////
///////// NO API ENDPOINTS AFTER THIS SECTION ////////
//////////////////////////////////////////////////////

app.use(express.static("../client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});




db.connect().then(() => {
  if (process.env.NODE_ENV !== 'test') {
    app.listen(process.env.PORT || 2000, () => {
      console.log(`Server is running`);
    });
  }
}).catch(err => {
  console.error("Failed to connect to MongoDB:", err);
});

export default app;