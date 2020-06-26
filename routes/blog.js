var express = require('express');
var router = express.Router();

/* GET Blog page. */
router.get('/', function(req, res, next) {
  res.render('blog', 
  	{ 
  		title: 'Maurya Bhaji-Wala | Blog ' ,
  		name : 'Maurya Bhaji-Wala', 
  		email: 'kkmaurya.0095@gmail.com',
  		phone: '7738910992',
  		dilivery:'1-2  Hour delivery & Free delivery'
  	});
});

module.exports = router;
