import express from "express";

function noteApi(db){
    const notesApi = express.Router();

    notesApi.get("/note", async (req, res) => {
        console.log("Someone gett meals from DB");
        const data = db.collection("notes");
        const notes = await data.find().toArray();
        res.json(notes);
        console.log(`[IP: ${req.ip} REFERRER: ${req.referrer}] got all meals`)
    });


    notesApi.post("/note", async (req, res) => {
        const notescollection = db.collection("notes");
        const newNote = {
            id: notescollection.length + 1,
            title: req.body.title,
            content: req.body.content,
        };

        const result = await notescollection.insertOne(newNote);

        res.json(newNote);

    })
    return notesApi;
}


export default noteApi;