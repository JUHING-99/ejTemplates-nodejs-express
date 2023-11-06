// Variables globales
const express = require('express')
const app = express()
const port = 3000

// Pug
app.set('view engine', 'pug');
app.set('views','./views');
// Access to public folder
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('home');
  });
app.get('/about', function(req, res){
    res.render('about');
  });

app.get("/location", (req, res) => {
    res.render('location');
});

app.get("/mission", (req, res) => {
    res.render('mission');
});

app.get("/contact", (req, res) => {
    res.render('contact',{ 
        url:"https://www.thebridge.tech/"
    });
});


app.get("*",(req,res)=>{
    res.status(404).send("Gatito triste - 404 not found");
})



app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })