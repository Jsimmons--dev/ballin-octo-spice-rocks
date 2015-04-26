var jade = require('jade');
var fs = require('fs');
var JSONparams = require('./routes/example1/JSONparams')
var injects = require('./routes/example1/injects');
var style = '';
fs.readFile('./public/stylesheets/frame.css','utf8',function(err,data){
	if(err) {
		return console.log(err);
	}
	style = data;
	injects.style = style;
	injects.pretty = true;
	var fn = jade.renderFile('views/frameDiv.jade',injects);

	console.log(fn);
});
