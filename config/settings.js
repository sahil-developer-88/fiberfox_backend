// exports.dbConfig = {
//     user:  'sa',
//     password: 'mbrinfo@123',
//     server: '192.168.0.67\\mbrinfo',
//     database:'Fiberfox_Db',
//     port:1433

// };


exports.dbConfig = {
    user:  'rahman@fiberfox',
    password: 'fiberfox_123',
    server: 'fiberfox.database.windows.net',
    database:'Fiberfox_Db',
    port:1433,
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }

};

exports.secrets={'superSecret': 'goyalRahmanJointSecretCode'};