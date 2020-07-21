var express = require('express');
var router = express.Router();
var connection = require('../database/db');
/* GET Login page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', 
  { 
  		title: 'Maurya Bhaji-Wala | Login ', 
  		name : 'Maurya Bhaji-Wala', 
  		email: 'mauryaanil639@gmail.com',
  		phone: '7738910992',
  		dilivery:'1-2  Hour delivery & Free delivery'
  });
});

router.post('/login',function (req, res , next) {
	var username = request.body.username;
	var password = request.body.password;
	console.log(username,password);
	if (username && password)
	{
		connection.query('SELECT * FROM admin WHERE username=? AND password=?',[username,password],function(error,result,fields){
			if (result.length>0)
			{
				request.session.loggedin = true;
				request.session.username=username;
				response.redirect('/admin/dashboard');
			}else{
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
router.get('/admin/dashboard', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});


module.exports = router;
