var express = require('express');
var router = express.Router();
var db = require('../db');
 
 
 // Gets all the products
 router.get('/', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM Product`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });


  
router.get('/:id', (req, res, next) => {

    console.log('p222: ', req.params.id)
    let mySQLQuery = `SELECT * FROM Product WHERE  ClientId = ${req.params.id}`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
  });

  

 //Create product
router.post('/', (req, res, next) => {
   //  console.log(req.body);
       let insert1 = `INSERT INTO Product (ProductId,ClientId, Product_Name, Owner_Email, Type, Specs, Floating, VendorPrice_Per_m, Margin, Color, NumberOfColors, InkType)  VALUES 
                   (DEFAULT,  '${req.body.ClientId}','${req.body.ProductName}', '${req.body.Owner_Email}',
                   '${req.body.Type}', '${req.body.Spect}', '${req.body.Floating}', '${req.body.Vendor_Price}', '${req.body.Margin}',
                   '${req.body.Color}','${req.body.NumberOfColor}','${req.body.InkType}')`;
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
               
module.exports = router;