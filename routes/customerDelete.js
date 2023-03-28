var express = require('express');
var router = express.Router();
var db = require('../db');

// Removes a row from the client table
router.delete('/customerDelete/:row', function (req, res, next) {
  var delete1 = 'DELETE FROM client WHERE EMAIL = ' + req.params.row; // chio inja bayad pass konam? body nadarim k
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