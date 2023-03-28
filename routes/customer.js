var express = require('express');
var router = express.Router();
var db = require('../db');

// Gets all the customers 
router.get('/', (req, res, next) => {
    let mySQLQuery = `SELECT Account_Name , Last_Name, Phone, Address FROM client WHERE Client_Role ='customer' && Client_Act_Status = '1'`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });

 // Gets the client by ID
router.get('/:id', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM client WHERE  ClientId = '${req.params.id}' && Client_Role ='customer'`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });

 router.delete('/:row', function (req, res, next) {
    var delete1 = 'DELETE FROM client WHERE id = ' + req.params.row; // chio inja bayad pass konam? body nadarim k
    console.log('-->',req.params.row)
    db.query(
        delete1,
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
  });


module.exports = router;
