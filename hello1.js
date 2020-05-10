const http = require('http')
const fs = require('fs')
const portname = 3000
const hostname = '127.0.0.1'
const home = fs.readFileSync('harsh.html')
const about = fs.readFileSync('about.html')
const services = fs.readFileSync('services.html')
const contact = fs.readFileSync('contact.html')
const server = http.createServer((req, res) => {
    url = req.url
    res.statusCode = 200
    if (url == "/"){
        res.end(home)
    }
    else if (url == "/about"){
        res.end(about)
    }
    else if (url == "/services"){
        res.end(services)
    }
    else if (url == "/contact"){
        res.end(contact)
    }

})
server.listen(portname,hostname,()=>{
    console.log(`your server is running at http://${hostname}:${portname}`)
})
