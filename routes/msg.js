var express = require('express');
var router = express.Router();
var db = require('../db');

 // Gets all the msgs
 router.get('/', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM msg`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });
 router.get('/:id', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM msg WHERE ClientId = '${req.params.id}'`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });
 


//Create msg
router.post('/', (req, res, next) => {
    
// console.log(req.body);

   let insert1 = `INSERT INTO Msg (MsgId, MsgStatus, ClientId, Date, FullName, EMAIL, CompanyName, Phone, Type, ColorOfBox, NumberOfColor, Qnt, Due_Date, Text, Product_Name, Specs, Floating, InkType, Status, Price)  VALUES 
               (DEFAULT, '${req.body.MsgStatus}','${req.body.Client}','${req.body.Today}','${req.body.FullName}', '${req.body.Email}',
               '${req.body.CompanyName}', '${req.body.Phone}', '${req.body.Type}', '${req.body.ColorOfBox}', '${req.body.NumberOfColor}', 
               '${req.body.Qnt}', '${req.body.Date}','${req.body.Text}','${req.body.ProductName}','${req.body.Spect}','${req.body.Floating}','${req.body.InkType}','${req.body.Status}',
                '${req.body.Price}')`;
                // console.log(req.body);
               db.query(
                   insert1,
                  
                   function (err, results) {
                       if (!err) {
                           res.send(results);
                       } else {
                           console.log(err);
                       }
                       
                   }
                  
               );
              
           });
    router.delete('/:row', function (req, res, next) {
    var delete1 = 'DELETE FROM Msg WHERE MsgId = ' + req.params.row;
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

router.put('/:id', (req, res, next) => {
    let update = `UPDATE Msg SET Status = '${req.body.Status}', MsgStatus ='${req.body.MsgStatus}', Price= '${req.body.Price}' WHERE MsgId = ${req.params.id}`;
   
    db.query(update, (err, results) => {
       if (!err) {
          console.log('successfuully updated msg status');
          res.send(results);
      } else {
          console.log(err);
      }
    })
});       
module.exports = router;
//    MsgId, FullName, Email, CompanyName, Phone, Type, Color, HasPrint, NumberOfColor, Qnt, Date, Text) 

// '/Msg/:MsgId/:FullName/:Email/:CompanyName/:Phone/:Type/:Color/:HasPrint/:NumberOfColor/:Qnt/:Date/:Text'



