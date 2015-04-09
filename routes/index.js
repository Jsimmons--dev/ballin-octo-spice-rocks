var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Josh!' });
});
router.get('/frame',function(req,res){
	res.render('frameDiv');
});
module.exports = router;

