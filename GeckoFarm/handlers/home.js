const url = require('url');
const fs = require('fs');
const path = require('path');
const geckos = require('../data/geckos');
const species = require('../data/species');


module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathmame === '/' && req.method === 'GET') {

        // implement the logic for showing the html view
        let filepath = path.normalize(
            path.join(__dirname, "./views/home/index.html")
        );
        fs.readFile(filepath, (err,data) => {
            if(err){
                console.log(err);
                res.writeHead(404,{
                    'Content-Type': "text/plain"
                });

                res.write(404);
                res.end();
                return;
            }
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.
        res.write(data);
        res.end();
        });

    } else {
        return true;

    }
}