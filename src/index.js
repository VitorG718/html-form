const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    switch (request.url) {
        case '/':
            fs.readFile(__dirname + '/pages/index.html', (error, data) => {
                if (error) {
                    console.log('Error', error.message)
                } else {
                    response.write(data)
                    response.end()
                }
            })
            break
        case '/form':
            response.write('Form')
            response.end()
            break
        case '/signedup':
            response.write('Form handle')
            response.end()
            break
        default:
            response.write('Page not found')
            response.end()
    }
}).listen(80)