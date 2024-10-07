const express = require("express");
const path = require('path');

const app = express();
const port = 9000;


app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res)=>{
    res.render('home');
})





app.listen(port, ()=> console.log(`listening to the port: ${port}`));