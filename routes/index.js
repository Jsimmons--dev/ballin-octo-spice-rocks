var express = require('express');
var jade = require('jade');
var jsonParams = require('./example1/JSONparams');
var router = express.Router();
//var example1 = require('../example1/boilerplate.json');
//console.log(example1);
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Josh!' });
});


router.get('/frame',function(req,res){
	res.render('frameDiv',jsonParams);
});
module.exports = router;

