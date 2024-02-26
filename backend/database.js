// DATABASE.JS
const mongoose = require('mongoose'); 
const URI = 'mongodb://127.0.0.1:27017/db_gastos';

mongoose.connect(URI, { dbName: 'db_gasto' })
  .then(db => console.log('BD conectada'))
  .catch(err => console.error(err));

module.exports = mongoose;
