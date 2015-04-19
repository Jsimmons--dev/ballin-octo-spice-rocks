var jade = require('jade');
var JSONparams = require('./routes/example1/JSONparams')
var injects = require('./routes/example1/injects');
JSONparams.pretty = true;
injects.pretty = true;
var fn = jade.renderFile('views/frameDiv.jade',injects);

console.log(fn);
