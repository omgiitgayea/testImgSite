/**
 * Created by GodaiYuusaku on 5/1/17.
 */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(3000, () => {
    console.log("Wow, someone's actually listening to me!")
});

app.get("/array", (req, res) => {
    let file = fs.readdirSync(`${__dirname}/public`);
    res.send(file);
});

app.use(express.static("public"));
