// const mysql = require("mysql2/promise");
// const express = require("express");
// const app = express();
// require("dotenv").config();
// const configDB = require("./Configure/configDB.js");
// const hash = require("js-sha512").sha512_224;
// // app.use(express.json()); //converts data in req.body to json format

const getAllItems = async function (req, res, next) {
  const mysql = require("mysql2/promise");

  const connection = await mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    user: "sql3501239",
    password: "yS6L1p416X",
    database: "sql3501239",
    port: 3306,
  });
  const [rows, fields] = await connection.execute("SELECT * FROM todo");
  console.log(rows);
  //   // try {
  //   //   await connection.query(`SELECT * FROM todo`);
  //   //   console.log("all data received");
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
};
// const addItem = async function (req, res, next) {
//   const connection = await mysql.createConnection(configDB.db);

//   try {
//     await connection.query(
//       `INSERT INTO todo (priority, date, type, item_description) VALUES (${req.body.priority}, ${req.body.date}, ${req.body.type}, ${req.body.description})`
//     );
//     console.log("inserted");
//   } catch (error) {
//     console.log(error);
//   }
// };
// // addItem();

// const deleteItem = async function (req, res, next) {
//   const connection = await mysql.createConnection({
//     host: "sql3.freesqldatabase.com",
//     user: "sql3501239",
//     password: "yS6L1p416X",
//     database: "sql3501239",
//     port: 3306,
//   });
//   try {
//     await connection.query(
//       `DELETE FROM todo WHERE item_id = ${req.params.itemID}`
//     );
//     console.log("deleted");
//   } catch (error) {
//     console.log(error);
//   }
// };
// // deleteItem();

module.exports = {
  //   addItem,
  //   deleteItem,
  getAllItems,
};
