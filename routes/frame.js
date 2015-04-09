var express = require('express');
var router = express.Router();

router.get('/frame',function(req,res) {
  res.render('index', { title: 'Frame!' });
});
//module.exports = router;

