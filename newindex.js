
const weather = require('weather-js');
const express = require('express')
const app = express()

var admin = require("firebase-admin");

var serviceAccount = require("./firebase-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const songs_coll = db.collection('songs');

app.set('view engine', 'ejs')
const port = 8000;

app.use((req, res, next) => {
    console.log('Request made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/songs', async (req, res) => {
    const items = await songs_coll.get()
    // console.log(items.docs)
    let data = {
        itemData: items.docs,
        heading: "Ten dollar founding father",
        song: "Intro"
    }
    res.render('songs', data)
})

app.get('/', function (req, res) {
//   res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {heading: "I am not throwing away my shot", heading2: "Ayo I'm just like my country I'm young, scrappy, and hungry and I am not throwing away my shot!"})
})

app.get('/davao', function (req, res) {
    //   res.sendFile('./views/index.html', {root: __dirname});
    weather.find({search: 'Davao, PHL', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       else{
        let data = {
            weatherdvo: eval(JSON.stringify(result, null, 2))
        }
        res.render('davao', data)
       }
      });
})

app.get('/about', function (req, res) {
    res.render('about')
    // res.sendFile('./views/about.html', {root: __dirname});
  })

app.get('/home', (req,res) =>{
    res.redirect('/');
})
app.get('/aboutus', (req,res) =>{
    res.redirect('/about');
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})

app.use((req, res) => {
    res.status(404).sendFile('./views/error.html', {root: __dirname});
})