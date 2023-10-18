import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config()
const app = express();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET)); //Cookie secret to do some simple authentication PLASSER I EN ENV FIL

//////////////////////////////////////////////////////
///////// API ENDPOINTS GO HERE               ////////
//////////////////////////////////////////////////////

let items = [
    {id: 0, title: "First note", content: " This is the first note"},
    {id: 1, title: "First note", content: " This is the first note"},
]

app.get("/api/v1/todoitems", (req, res) => {

    res.json(items);

});









//////////////////////////////////////////////////////
///////// NO API ENDPOINTS AFTER THIS SECTION ////////
//////////////////////////////////////////////////////

app.use(express.static("../client/dist"));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(process.env.PORT || 2000, () => {
    console.log("Server is running on port 3000")
})