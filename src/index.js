const express = require('express')
const Person = require('./models/person')
const databaseConnection = require('./database/database')

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

app.get('/profile', (req, res) => {
    databaseConnection.connect()
    databaseConnection.query('SELECT * FROM person', (error, results, fields) => {
        if (error) console.error('Error on quering process');
        console.log('Person: ', new Person(results[0]))
    })
    databaseConnection.end()
    res.send('profile page')
})

app.get('/page-not-found', (req, res) => {
    res.send('page not found')
})
