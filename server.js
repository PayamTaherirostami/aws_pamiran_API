var createError = require('http-errors');
var express = require('express');
var path = require('path');

var logger = require('morgan');
var cors = require('cors');
var bodyParser= require('body-parser');


// Starting server
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));

// INITALIZING THE ROUTES

const vendorRouter = require('./routes/vendor');
const ordersRouter = require('./routes/orders');
const customerRouter = require('./routes/customer');
const customersRouter = require('./routes/customers');
const myAccRouter = require('./routes/myAccount');
const orderCalRouter = require('./routes/orderCal');
const employeeRouter = require('./routes/employee');
const productRouter = require('./routes/product');
const msgRouter = require('./routes/msg');
const tranRouter = require('./routes/transactions');

// CALLING THE ROUTES

app.use('/vendor', vendorRouter);
app.use('/orders',ordersRouter);
app.use('/customer',customerRouter);
app.use('/customers',customersRouter);
app.use('/msg', msgRouter);
app.use('/transactions', tranRouter);
app.use('/myAccount', myAccRouter);
app.use('/orderCal',orderCalRouter);
app.use('/employee', employeeRouter);
app.use('/product',productRouter);


app.get('/', (req,res) =>{
    res.send("Welcome to Pamiran")
})

// start the server
const port = process.env.PORT || 9000;
var server = app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
});

module.exports = app;