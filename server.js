const express = require("express")

const app = express()
var cors = require('cors')

app.use(cors())
const fs = require("fs")

app.get("/", (req, res) => {
    res.send("<h1>hello world </h1>")

})

app.get("/read", (req, res) => {

    var content = fs.readFileSync("test.txt");
    res.json({ content: content.toString() })

})


const Port = process.env.PORT || 5001


const run = () => {
    app.listen(Port, () => {
        console.log("app is running under port ", Port)
    })
}

run()