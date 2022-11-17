
const express = require('express')
const app = express();
const port = 80;



app.get('/api', (req, res) => {
    res.json({
        name: 'Tom',
        age: 20
    })
    res.end(res);
});

app.listen(port)




