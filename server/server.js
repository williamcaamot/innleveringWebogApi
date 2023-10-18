import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config()
const app = express();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET)); //Cookie secret to do some simple authentication PLASSER I EN ENV FIL


app.use(express.static("../client/dist"));
app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});






app.listen(process.env.PORT || 2000, () => {
    console.log("Server is running on port 3000")
})