console.log('salam');
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', { pseudo: 'momo' })
})

app.listen(9090, function () {
    console.log('le port 9090 est en ecoute ! ');
})
