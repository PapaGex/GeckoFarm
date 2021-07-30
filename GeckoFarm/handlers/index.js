

const homeHandler = require('./home');
const staticFiles = require('./static-files');
const geckoHandler = require('./geckos');

module.exports = [homeHandler, staticFiles, geckoHandler];
