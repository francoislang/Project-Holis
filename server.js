
const express = require('express');
const client = require('./database.js');
const app = express();
const port = 80;

const database = require('./database.js')
client.connect();

// function to take all users
async function getAllUsers(){
    const users = await client.query('SELECT * FROM "public"."users"')
    
    return users.rows;
}



// get all users
app.get('/users', async (req, res) => {
    console.log(req)
    res.json(await getAllUsers())
})

// post a user 
app.post('/postUsers', (req, res) => {
    
    res.send('POST request to homepage')

  })

app.listen(port)
