// var settings=require('../../config/settings');
// var sql = require("mssql");



// var connection = new Connection(config);

// connection.on('connect', function(err) {
//     // If no error, then good to go...
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('connected!');
//     }
//     //executeStatement();
//   }
// );

// exports.con=connection;

// // connection.on('debug', function(text) {
// //     console.log(text);
// //   }
// // );

// // function executeStatement() {
// //   request = new Request("select * from categories", function(err, rowCount) {
// //     if (err) {
// //       console.log(err);
// //     } else {
// //       console.log(rowCount + ' rows');
// //     }

// //     connection.close();
// //   });

// //   request.on('row', function(columns) {
// //     columns.forEach(function(column) {
// //       if (column.value === null) {
// //         console.log('NULL');
// //       } else {
// //         console.log(column.value);
// //       }
// //     });
// //   });
