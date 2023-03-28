var express = require('express');
var router = express.Router();
var db = require('../db');

 // Gets the client_role where it's employee
 router.get('/', (req, res, next) => {
    let mySQLQuery = `SELECT Email, First_Name FROM client WHERE Client_Role ='employee' && Client_Act_Status = '1'`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });

 
  // Gets the employee by ID
router.get('/:id', (req, res, next) => {
   let mySQLQuery = `SELECT * FROM client WHERE ClientId = '${req.params.id}'`;
   db.query(mySQLQuery, (err, results) => {
      if (!err) {
         res.send(results);
     } else {
         console.log(err);
     }
   })
});

 module.exports = router;


