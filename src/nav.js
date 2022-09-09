const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.write('<h1>Home Page</h1>');
    res.write('<h1>Home Page</h1>');
    res.send();
});

app.get('/about', (req, res) =>{
    res.json([
        {
            id:1,
            name:'Usman'
        },
        {
            id:1,
            name:'Usman'
        },
        {
            id:1,
            name:'Usman'
        },
    ]);
});

app.get('/contact', (req, res) =>{
    res.send('Contact Page');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});