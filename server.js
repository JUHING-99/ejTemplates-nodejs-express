// Variables globales
const express = require('express')
const app = express()
const port = 3000

// Pug
app.set('view engine', 'pug');
app.set('views','./views');


app.get("/home", (req, res) => {
    res.sendFile(path.join(dirname, "/index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(dirname, "/about.html"));
});

app.get("/location", (req, res) => {
    res.sendFile(path.join(dirname, "/location.html"));
});

app.get("/mission", (req, res) => {
    res.sendFile(path.join(dirname, "/mission.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "/contact.html"));
});







app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })