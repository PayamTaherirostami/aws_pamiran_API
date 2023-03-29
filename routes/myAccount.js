var express = require('express');
var router = express.Router();
var db = require('../db');

// Gets all the clients
router.get('/', (req, res, next) => {
    let mySQLQuery = `SELECT ClientId, Account_Name FROM client WHERE EMAIL='payamtaherirostami@gmail.com' `;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });

 router.get('/:id', (req, res, next) => {
    let mySQLQuery = `SELECT ClientId, Account_Name FROM client WHERE  ClientId = '${req.params.id}'`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });

 

 module.exports = router;