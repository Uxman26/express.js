const path = require('path');
const express = require('express');
const hbs = require('hbs');
const requests = require('requests');
const { query } = require('express');
const app = express();
staticPath = path.join(__dirname, '../public');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

// to set the view engine
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath)

// app.use(express.static(staticPath)); //builtin middleware

// app.get('/', (req, res) => {
//     res.send('hello')
// });

//template engine route
// app.get('/', (req, res) => {
//     res.render('index', {Name:'Usman'});
// })

// app.get('/about', (req, res) => {
//     res.render('about');
// })

// app.get('/about/*', (req, res) => {
//     res.render('404', {errorcomment: 'Opps this about us 404 Error'});
// })

app.get('/about', (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=874fab61163ce420c34156be33ab37af`)
    .on('data', (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log (`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
        
        res.write(arrData[0].name);
    })

    .on('end', (err) => {
        if (err) return console.loh('Connection Closed due to error', err);
        res.end();
    })
})


app.get('*', (req, res) => {
    res.render('404', {errorcomment: 'Opps 404 Error'});
})

app.listen(8000, () => {
    console.log('listing');
})