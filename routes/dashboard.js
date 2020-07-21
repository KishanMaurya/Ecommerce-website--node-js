var express = require('express');
var router = express.Router();

/* GET Dashboard page. */
router.get('/', function(req, res, next) {
    res.render('admin/dashboard',
        {
            title: 'Maurya Bhaji-Wala | About ',
            name : 'Maurya Bhaji-Wala',
            email: 'mauryaanil639@gmail.com',
            phone: '7738910992',
            dilivery:'1-2  Hour delivery & Free delivery'
        });
});

module.exports = router;
