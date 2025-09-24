const express = require('express');
const path = require('path');

const app = express();


// setting up parsers
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// all static files, images javascript(client side) and CSS, are found in this path -> path.join(__dirname, 'public') joins  the current directory location and public.
app.use(express.static(path.join(__dirname, 'public')))

// setting ejs as a view engine;
app.set('view engine', 'ejs');


// routes
app.get('/', (req, res) =>{
    res.render("index");
})

// dynamic routing, put : to before ethe dynamic part in the route.
app.get('/profile/:username', (req, res) => {
    res.send("hello, " + req.params.username)
    // or
    res.send(`hello, ${req.params.username}`)

})

app.get('/author/:username/:age', (req, res)=>{
    res.send(`Hello author: ${req.params.username}, age: ${req.params.age}`);
})

app.listen(3000, ()=>{
    console.log("its running");
});
