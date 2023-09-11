const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

app.post("/", (req, res) => {
    console.log(req.body)
    res.status(200);
    res.send("OK");
})

app.listen(8000, () => {
    console.log("Server started")
})