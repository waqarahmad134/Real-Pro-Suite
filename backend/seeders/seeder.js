const mysql = require("mysql2")
const fs = require("fs")

// Load .env variables
require("dotenv").config()

// Read SQL seed query
const seedQuery = fs.readFileSync("./seed.sql", {
  encoding: "utf-8",
})
//console.log(seedQuery)

// Connect to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'realsuitepro',
  multipleStatements: true, // IMPORTANT
})

connection.connect();
console.log("Running SQL seed...")

// Run seed query
connection.query(seedQuery, err => {
  if (err) {
    //console.log(err);
    throw err 
  }

  console.log("SQL seed completed!")
  connection.end()
})