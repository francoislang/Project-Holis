
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

// function to add a user
async function addUser(user){
    const newUser = await client.query('INSERT INTO "public"."users" ("first_name", "password", "mail", "last_name") VALUES ($1, $2, $3, $4)', [user.firstName, user.password, user.mail, user.lastName])
    
}

// get all users
app.get('/users',  async (req, res) => {
    const users = await getAllUsers();
    res.send(users);
})

// post user
app.post('/postUsers', jsonParser,  async (req, res) => {
    const user = req.body;
    const newUser = await addUser(user);
})






app.listen(port)
