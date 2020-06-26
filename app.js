var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var usersRouter = require('./routes/users');
var blogSingleRouter = require('./routes/blog-single');
var blogRouter = require('./routes/blog');
var cartRouter = require('./routes/cart');
var checkoutRouter = require('./routes/checkout');
var contactRouter = require('./routes/contact');
var productSingleRouter = require('./routes/product-single');
var shopRouter = require('./routes/shop');
var wishlistRouter = require('./routes/wishlist');

//single-page-product
var product_1Router = require('./routes/product-1');
var product_2Router = require('./routes/product-2');
var product_3Router = require('./routes/product-3');
var product_4Router = require('./routes/product-4');
var product_5Router = require('./routes/product-5');
var product_6Router = require('./routes/product-6');
var product_7Router = require('./routes/product-7');
var product_8Router = require('./routes/product-8');
var product_9Router = require('./routes/product-9');
var product_10Router = require('./routes/product-10');
var product_11Router = require('./routes/product-11');
var product_12Router = require('./routes/product-12');
var product_13Router = require('./routes/product-13');
var product_14Router = require('./routes/product-14');
var product_15Router = require('./routes/product-15');
var product_16Router = require('./routes/product-16');
var product_17Router = require('./routes/product-17');
var product_18Router = require('./routes/product-18');
var product_19Router = require('./routes/product-19');
var product_20Router = require('./routes/product-20');
var product_21Router = require('./routes/product-21');
var product_22Router = require('./routes/product-22');
var product_23Router = require('./routes/product-23');
var product_24Router = require('./routes/product-24');
var product_25Router = require('./routes/product-25');
var product_26Router = require('./routes/product-26');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//this route works for the access the page (get this page by name)

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/users', usersRouter);
app.use('/blog-single', blogSingleRouter);
app.use('/blog', blogRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/contact', contactRouter);
app.use('/product-single', productSingleRouter); 
app.use('/shop', shopRouter);
app.use('/wishlist', wishlistRouter);


//product link url

app.use('/product-1' , product_1Router);
app.use('/product-2' , product_2Router);
app.use('/product-3' , product_3Router);
app.use('/product-4' , product_4Router);
app.use('/product-5' , product_5Router);
app.use('/product-6' , product_6Router);
app.use('/product-7' , product_7Router);
app.use('/product-8' , product_8Router);
app.use('/product-9' , product_9Router);
app.use('/product-10' , product_10Router);
app.use('/product-11' , product_11Router);
app.use('/product-12' , product_12Router);
app.use('/product-13' , product_13Router);
app.use('/product-14' , product_14Router);
app.use('/product-15' , product_15Router);
app.use('/product-16' , product_16Router);
app.use('/product-17' , product_17Router);
app.use('/product-18' , product_18Router);
app.use('/product-19' , product_19Router);
app.use('/product-20' , product_20Router);
app.use('/product-21' , product_21Router);
app.use('/product-22' , product_22Router);
app.use('/product-23' , product_23Router);
app.use('/product-24' , product_24Router);
app.use('/product-25' , product_25Router);
app.use('/product-26' , product_26Router);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
