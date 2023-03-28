var express = require('express');
var router = express.Router();
var db = require('../db');


router.get('/', (req, res, next) => {
    let mySQLQuery = 'SELECT Account_Name AS title, OrderDate AS date, OrderStatus AS status, BackgroundColor As backgroundColor FROM ClientOrders ';
       db.query(mySQLQuery, (error, results) => {
          if (error) {
             console.log(mySQLQuery, error);
             res.sendStatus(500);
          } else {
             res.send(results);
          }
       })
 });
 module.exports = router;