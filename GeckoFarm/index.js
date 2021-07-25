const http = require('http');
const port = 2077;




http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.write('What up JS');
    res.end();
}).listen(port);