const express  = require('express');
const path = require('path');
const userList = require("./data/userList.json");
const users = require("./data/users.json");

const app = express();
app.use('/dist', express.static(__dirname + '/../dist'));


app.get(['/', '/list'], (req, res) => {
    res.sendFile(path.join(`${__dirname}'/../index.html`));
});

app.get('/get-user-list', (req,res) => {
    res.send(userList.userList);
});

app.get('/get-user', (req, res) => {
    const id = req.query.id;

    if (Object.keys(users.users).includes(id)){
        res.send(users.users[id]);
    } else {
        res.status(400);
        res.send(`User with id ${id} was not found`)
    }
    
});

app.listen(3000, () => {
   console.log("Started on port 3000"); 
})