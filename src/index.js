const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

class Person {

    constructor(jsonData) {
        this.name = jsonData.name
        this.surname = jsonData.surname
        this.email = jsonData.email
        this.phone = jsonData.phone
        this.password = jsonData.password
        this.gender = jsonData.gender
        this.newsletter = (jsonData.newsletter == 'on' ? true:false)
    }
}

http.createServer((request, response) => {
    switch (request.url) {
        case '/':
            fs.readFile(__dirname + '/pages/index.html', (error, data) => {
                if (error) {
                    console.log('Error', error.message)
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'})
                    response.write(data)
                }
                response.end()
            })
            break
        case '/form':
            fs.readFile(__dirname + '/pages/index.html', (error, data) => {
                if (error) {
                    console.log('Error', error.message)
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'})
                    response.write(data)
                }
                response.end()
            })
            break
        case '/signedup':
            let form = new formidable.IncomingForm()
            form.parse(request, (error, fields, files) => {
                if (error) {
                    console.log('Error: ', error.message)
                } else {
                    response.writeHead(200, {'Content-Type': 'application/json'})
                    let person = new Person(fields)
                    response.write(JSON.stringify({ person }, null, 2));
                }
                response.end()
            })
            break
        default:
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write('Page not found')
            response.end()
    }
}).listen(80)