import express from "express";
import path from "path";

const app = express();


app.get("/api/v1/tools", (req, res) => {

})

app.use(express.static("../client/dist/"));



app.use((req, res, next) => {
    res.sendFile(path.resolve("../client/dist/index.html"));
});



app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000")
})