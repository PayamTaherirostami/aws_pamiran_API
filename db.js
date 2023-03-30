// CONNECT TO DATABASE
const mysql = require('mysql2');
require('dotenv').config();
// let myCredentials = require('../../../../dbCreds.json');
// let connection = mysql.createConnection(myCredentials);
// mysql://bcce6d95409ae7:c3515a96@us-cdbr-east-05.cleardb.net/heroku_75d95866fa704c6?reconnect=true

// var db_config = {
//     host:"us-cdbr-east-05.cleardb.net",
//     user:"bcce6d95409ae7",
//     password:"c3515a96",
//     database:"heroku_75d95866fa704c6"
//   };
  
//   var connection;
  
//   function handleDisconnect() {
//     connection = mysql.createConnection(db_config); // Recreate the connection, since
//                                                     // the old one cannot be reused.
  
//     connection.connect(function(err) {              // The server is either down
//       if(err) {                                     // or restarting (takes a while sometimes).
//         console.log('error when connecting to db:', err);
//         setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//       }                                     // to avoid a hot loop, and to allow our node script to
//     });                                     // process asynchronous requests in the meantime.
//                                             // If you're also serving http, display a 503 error.
//     connection.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//         handleDisconnect();                         // lost due to either server restart, or a
//       } else {                                      // connnection idle timeout (the wait_timeout
//         throw err;                                  // server variable configures this)
//       }
//     });
//   }
  
//   handleDisconnect();

//   // return the connection 

//Endpoint
//pamiran-aws.cqjdkxufjygk.us-west-2.rds.amazonaws.com
//Port
//3306

// 

const connection = mysql.createPool({
    host:"pamiran-aws-api.cqjdkxufjygk.us-west-2.rds.amazonaws.com",
    user:"admin",
    password:"Payam1361",
    database:"Pamiran_Aws",
    waitForConnections: true,
    connectionLimit: 10,
    

});
module.exports = connection;