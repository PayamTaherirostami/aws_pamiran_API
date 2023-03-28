var express = require('express');
var router = express.Router();
var db = require('../db');


// Returns the orders the are NOT complete (status == 0)
router.get('/', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM ClientOrders `;
       db.query(mySQLQuery, (error, results) => {
          if (error) {
             console.log(mySQLQuery, error);
             res.sendStatus(500);
          } else {
             res.send(results);
          }
       })
 });


 router.get('/Ordered', (req, res, next) => {
   let mySQLQuery = `SELECT * FROM ClientOrders  WHERE OrderStatus = 'Ordered'`;
      db.query(mySQLQuery, (error, results) => {
         if (error) {
            console.log(mySQLQuery, error);
            res.sendStatus(500);
         } else {
            res.send(results);
         }
      })
});
router.get('/Pending', (req, res, next) => {
   let mySQLQuery = `SELECT * FROM ClientOrders  WHERE OrderStatus = 'Pending'`;
      db.query(mySQLQuery, (error, results) => {
         if (error) {
            console.log(mySQLQuery, error);
            res.sendStatus(500);
         } else {
            res.send(results);
         }
      })
});
 
 router.get('/inProcess', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM ClientOrders WHERE OrderStatus = 'InProcess'`;
       db.query(mySQLQuery, (error, results) => {
          if (error) {
             console.log(mySQLQuery, error);
             res.sendStatus(500);
          } else {
             res.send(results);
          }
       })
 });
  
 router.get('/completed', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM ClientOrders WHERE OrderStatus = 'Completed'`;
       db.query(mySQLQuery, (error, results) => {
          if (error) {
             console.log(mySQLQuery, error);
             res.sendStatus(500);
          } else {
             res.send(results);
          }
       })
 });


  // Gets the order by ClientID
router.get('/:id', (req, res, next) => {
   let mySQLQuery = `SELECT * FROM ClientOrders WHERE ClientId = '${req.params.id}'`;
   db.query(mySQLQuery, (err, results) => {
      if (!err) {
         res.send(results);
     } else {
         console.log(err);
     }
   })
});



 //Create ClientOrders
 router.post('/', (req, res, next) => { 
       let insert1 = `INSERT INTO ClientOrders (OrdersId, ClientId, ProductId, Account_Name, OrderDate, OrderStatus, Qnt, Price,BackgroundColor)  VALUES 
                   (DEFAULT, '${req.body.ClientId}', '${req.body.ProductId}', '${req.body.Account_Name}','${req.body.OrderDate}'
                   , '${req.body.OrderStatus}' ,'${req.body.Qnt}','${req.body.Price}','${req.body.BackgroundColor}')`;
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

router.put('/:id', (req, res, next) => {
            let update = `UPDATE ClientOrders SET OrderStatus = '${req.body.OrderStatus}',BackgroundColor='${req.body.BackgroundColor}' WHERE OrdersId = ${req.params.id}`;
           
            db.query(update, (err, results) => {
               if (!err) {
                  res.send(results);
              } else {
                  console.log(err);
              }
            })
        });
// router.delete('/orderDelete/:row', function (req, res, next) {
//    var delete1 = 'DELETE FROM Msg WHERE EMAIL = ' + req.params.row; // chio inja bayad pass konam? body nadarim k
//    console.log('-->',req.params.row)
//    db.query(
//          delete1,
//          function (err, results) {
//             if (!err) {
//                res.send(results);
//             } else {
//                console.log(err);
//             }
//          }
//    );
//    });

module.exports = router;