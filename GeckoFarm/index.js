

const http = require('http');
const port = 2077;
const handlers = require('./handlers');



http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
    res.write('What up JS');
    res.end();
}).listen(port);