const http = require("http")
const port = 3000;

const rotas = {
    '/' : 'Node.js Course',
    '/books' : 'List of books',
    '/authors' : 'List of authors',
    '/publishers' : 'List of publishers',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`)
})