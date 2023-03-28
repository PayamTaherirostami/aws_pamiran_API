var express = require('express');
var router = express.Router();
var db = require('../db');

// Gets all the clients
// CORS header `Access-Control-Allow-Origin` set to accept all
// app.get('/allow-cors', function(request, response) {
//     response.set('Access-Control-Allow-Origin', '*');
//     response.sendFile(__dirname + '/message.json');
//   });
router.get('/', (req, res, next) => {
    let mySQLQuery = `SELECT * FROM client `;
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
    let mySQLQuery = `SELECT * FROM client WHERE  ClientId = '${req.params.id}'`;
    db.query(mySQLQuery, (err, results) => {
       if (!err) {
          res.send(results);
      } else {
          console.log(err);
      }
    })
 });

//  router.delete('/:id', function (req, res, next) {
//     //  console.log('222: ', req.params.id)
//     var delete1 = 'DELETE FROM client WHERE ClientId = ' + req.params.id;
//     db.query(
//         delete1,
//         function (err, results) {
//             if (!err) {
//                 res.send(results);
//             } else {
//                 console.log(err);
//             }
//         }
//     );
// });
router.delete('/:row', function (req, res, next) {
    var delete1 = 'DELETE FROM client WHERE ClientId = ' + req.params.row;
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

// router.delete('/customerDelete/:row', function (req, res, next) {
//     var delete1 = 'DELETE FROM client WHERE EMAIL = ' + req.params.row; // chio inja bayad pass konam? body nadarim k
//     console.log('-->',req.params.row)
//     db.query(
//         delete1,
//         function (err, results) {
//             if (!err) {
//                 res.send(results);
//             } else {
//                 console.log(err);
//             }
//         }
//     );
//   });

router.post('/', (req, res, next) => {
       let insert1 = `INSERT INTO client (ClientId, Account_Name , First_Name, Last_Name, Phone, EMAIL, Address, ZipCode, Client_Role, Client_Act_Status)  VALUES 
                   (DEFAULT, '${req.body.CompName}','${req.body.F_Name}','${req.body.L_Name}', '${req.body.Phone}', '${req.body.Email}',
                    '${req.body.Address}', '${req.body.ZipCode}', '${req.body.Client_Role}',
                    '${req.body.Client_Act_Status}')`;
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

 // UPDATE the client status (1= active 0= deactive) given vendor_id. */   ------>>>>>>> in kar nemikone felan
 router.put('/:id/:status', function (req, res, next) {
    let sqlUpdate = `UPDATE client SET Status = ${req.params.avail} WHERE vendor_id = ${req.params.id}`;
    db.query(sqlUpdate, (err, results) => {
        if (!err) {
           res.send(results);
       } else {
           console.log(err);
       }
     })
 });

module.exports = router;
