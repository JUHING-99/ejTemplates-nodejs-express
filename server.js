// Variables globales
const express = require('express')
const app = express()
const port = 3000


const rutas = require('./routes/rutas')


// Pug
app.set('view engine', 'pug');
app.set('views','./views');
// Access to public folder
app.use(express.static('public'));

app.use('/',rutas)

app.get("*",(req,res)=>{
    res.status(404).send("Gatito triste - 404 not found");
})



app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })