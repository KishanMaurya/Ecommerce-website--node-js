var express = require('express');
var router = express.Router();

/* GET Blog-single page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{ 
  		title: 'Maurya Bhaji-Wala | Blog-Single ',
  		name : 'Maurya Bhaji-Wala', 
  		email: 'kkmaurya.0095@gmail.com',
  		phone: '7738910992',
  		dilivery:'1-2  Hour delivery & Free delivery' 
  	});
});

module.exports = router;
