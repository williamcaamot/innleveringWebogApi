
import request from "supertest";
import server from "../server.js";

describe('GET /api/v1/note', () => {
    it('should fetch all notes', async () => {
        const response = await request(server).get('/api/v1/note');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([
            { id: 0, title: "First note", content: " This is the first note" },
            { id: 1, title: "Second note", content: " This is the second note" },
        ]);
    });
});