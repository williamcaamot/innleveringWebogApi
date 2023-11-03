import request from "supertest";

import noteApi from "../note/NoteAPI.js";
import express from "express";
import dotenv from "dotenv";
import {MongoClient} from "mongodb";


const app = express();
app.use(express.json());
let client;

beforeAll(async () => {
    dotenv.config();
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    let db = await client.db("test-database");
    await app.use("", noteApi(db));
})

afterAll(async () => {
    await client.close();  // Close the MongoDB connection
});


describe("note api", () => {
    it('shoul dfetch all notes and return 200', async() => {
        const res = await request(app).get("/note");
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(2);
    });


    //Could be split into two different tests
    it('should post a new note and return 200', async()=>{
        const title = "New Note Title";
        const content = "New Note Content";
        const res = await request(app).post("/note").send({
            title: title,
            content: content,
        }).expect(200);
        expect(res.body.title).toBe(title);
        expect(res.body.content).toBe(content);
    });

    it.todo('should update a note');

    it.todo('should delete a note');

})