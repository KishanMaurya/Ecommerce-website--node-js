var express = require('express');
var router = express.Router();

/* GET cart page. */
router.get('/', function(req, res, next) {
  res.render('cart', 
  	{ 
  		title: 'Maurya Bhaji-Wala | Cart ',
  		name : 'Maurya Bhaji-Wala', 
  		email: 'kkmaurya.0095@gmail.com',
  		phone: '7738910992',
  		dilivery:'1-2  Hour delivery & Free delivery' 
  	});
});

module.exports = router;
