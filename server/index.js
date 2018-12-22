const express  = require('express');
const path = require('path');
const users = require("./data/users.json");

const app = express();
app.use('/dist', express.static(__dirname + '/../dist'));


app.get(['/', '/list'], (req, res) => {
    res.sendFile(path.join(`${__dirname}'/../index.html`));
});

app.get('/users', (req,res) => {
    res.send(users);
});

app.listen(3000, () => {
   console.log("Started on port 3000"); 
})