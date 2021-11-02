const express = require('express')
const Person = require('./person.entity')

const app = express()

app.use(express.static(__dirname + '/public/'))
app.listen(3000, () => console.log('Server is running....'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/login.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/pages/login.html')
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/pages/form.html')
})

app.post('/profile', (req, res) => {
    res.send('profile page')
})

app.get('/page-not-found', (req, res) => {
    res.send('page not found')
})
