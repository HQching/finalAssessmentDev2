//just connects to the daatabase

const sqlite3 = require('sqlite3').verbose(); //when throw error message show more detailed error msg

var connection = new sqlite3.Database('./orders.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the orders database.');
});

module.exports = { connection };

