import express from "express";
import data from "./data.json"
with { type: 'json' };
const app = express();
const port = 3000;


//simple get function
app.get("/", (req, res) => {
    res.json(data);
    res.send(req.params);
})

app.listen(port, () => {
    console.log(`The server is running on port number ${port}`)
    console.log("json data captured successfully");
})