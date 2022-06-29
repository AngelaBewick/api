const mysql = require("mysql2/promise");
const express = require("express");
const app = express();
require("dotenv").config();
const config = require("./Configure/configDB.js");

// app.use(express.json()); //converts data in req.body to json format

const insertIntoDB = async function () {
  const connection = await mysql.createConnection(config.db);

  try {
    await connection.query(
      "INSERT INTO users (userName, password, encrypt_password) VALUES ('Paula', '3333', 'asdf3333') "
    );
    console.log("inserted");
  } catch (error) {
    console.log(error);
  }
};
insertIntoDB();

const deleteRow = async function () {
  const connection = await mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    user: "sql3501239",
    password: "yS6L1p416X",
    database: "sql3501239",
    port: 3306,
  });
  try {
    await connection.query("DELETE FROM users WHERE id = 5");
    console.log("deleted");
  } catch (error) {
    console.log(error);
  }
};
// deleteRow();

// app.get();
// const port = 5000;
// const start = async function () {
//   try {
//     await mysql.createConnection(config.db);

//     app.listen(port, console.log(`server is listening on port ${port}...`));
//     //only spin up the server if the connection to the database is successful
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
