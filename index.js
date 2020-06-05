import http from 'http'

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'text/html' })
    res.end('Server Running ...')
}).listen(3000)
