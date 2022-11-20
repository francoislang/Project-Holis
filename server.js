
const express = require('express');
const client = require('./database.js');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: "*",
}))
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const port = 80;

const database = require('./database.js')
client.connect();


// function to take all users
async function getAllUsers(){
    const users = await client.query('SELECT * FROM "public"."users"')
    
    return users.rows;
}

// function post user to database
async function postUser(user){
    const newUser = await client.query('INSERT INTO "public"."users" (first_name, password, mail, last_name)', [user.first_name, user.password, user.mail, user.last_name])
}



// get all users
app.get('/users',  async (req, res) => {
    const users = await getAllUsers();
    res.send(users);
})

// post user
app.post('/users', jsonParser,  async (req, res) => {
    const user = req.body;
    const newUser = await postUser(user);
    console.log(user);
})






app.listen(port)
