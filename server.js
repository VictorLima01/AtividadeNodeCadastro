const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: true}))

const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.post('/cadastrar', (req, res) => {
    console.log(req.body)
    var request = req.body
    res.render('dados.ejs', {
        request: request
    });
})

app.listen(3000, function(){
    console.log("Server is running in port 3000")
})

