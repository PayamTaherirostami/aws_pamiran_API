var express = require('express');
var router = express.Router();
var db = require('../db');
var async = require('async');

 // Gets all the transactions
 router.get('/', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM transaction`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });
 
router.get('/:id', (req, res, next) => {

    // console.log('222: ', req.params.id)
    let mySQLQuery = `SELECT * FROM transaction WHERE  ClientId = ${req.params.id}`; 
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
  });

//Create Transaction
router.post('/', (req, res, next) => {
// console.log(req.body.obj2.Email2);
let insert1 = `INSERT INTO transaction ( TransactionId, Date, Account, Debit, Credit, Description, Owner, ClientId)  VALUES 
                    (DEFAULT, '${req.body.obj.Date}', '${req.body.obj.Account1}',
                '${req.body.obj.Amount}', '${req.body.obj.AmountNull}', '${req.body.obj.Text}', '${req.body.obj.Email1}', '${req.body.obj.ClientId1}')`;
let insert2 = `INSERT INTO transaction ( TransactionId, Date, Account, Debit, Credit, Description, Owner, ClientId)  VALUES 
                    (DEFAULT, '${req.body.obj2.Date}', '${req.body.obj2.Account2}',
                '${req.body.obj2.AmountNull2}', '${req.body.obj2.Amount}', '${req.body.obj2.Text}', '${req.body.obj2.Email2}', '${req.body.obj2.ClientId2}')`;
                
    async.parallel([
        function (parallel_done) {
            db.query(insert1, {}, function (err, results) {
                if (err) return parallel_done(err);
                parallel_done();
            });
        },
        function (parallel_done) {
            db.query(insert2, {}, function (err, results) {
                if (err) return parallel_done(err);
                parallel_done();
            });
        }
    ],
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        });
});
           
module.exports = router;