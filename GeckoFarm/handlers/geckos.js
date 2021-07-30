const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const species = require('../data/species');
const geckos = require('../data/geckos');



module.exports = (req, res) => {

    const pathname = url.parse(req.url).pathname;

    if (pathname === '/geckos/add-gecko' && req.method === 'GET') {

    } else if (pathname === '/geckos/add-species' && req.method === 'GET') {

    } else {
        return true;
    }
};

let filePath = path.normalize(path.join(__dirname, "./views/addGecko.html"));
const index = fs.createReadStream(filePath);
index.on("data", (data) => {
    res.write(data);
});

index.on("end", () => {
    res.end();
});

index.on("error", (err) => {
    console.log(err);
});

