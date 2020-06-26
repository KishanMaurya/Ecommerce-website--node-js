var express = require('express');
var router = express.Router();

/* GET Shop page. */
router.get('/', function(req, res, next) {
  res.render('shop', 
  	{ 
  		title: 'Maurya Bhaji-Wala | Shop' ,
  		name : 'Maurya Bhaji-Wala', 
  		email: 'kkmaurya.0095@gmail.com',
  		phone: '7738910992',
  		dilivery:'1-2  Hour delivery & Free delivery'
  });
});

module.exports = router;
