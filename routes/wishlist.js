var express = require('express');
var router = express.Router();

router.get('/', function( req , res , next){
	res.render('wishlist', 
	{ 
		title: 'Maurya Bhaji-Wala | Shop' ,
		name : 'Maurya Bhaji-Wala', 
  		email: 'kkmaurya.0095@gmail.com',
  		phone: '7738910992',
  		dilivery:'1-2  Hour delivery & Free delivery'
	});
});

module.exports = router;
