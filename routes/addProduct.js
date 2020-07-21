var express = require('express');
var router = express.Router();
var connection = require('../database/db');

/* GET Login page. */
router.get('/', function(req, res, next) {
    res.render('admin/addProduct',
        {
            title: 'Maurya Bhaji-Wala | Login ',
            name : 'Maurya Bhaji-Wala',
            email: 'mauryaanil639@gmail.com',
            phone: '7738910992',
            dilivery:'1-2  Hour delivery & Free delivery'
        });
});