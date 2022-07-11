const express = require("express");
const app = express();

const getAllItems = async function (req, res, next) {
  try {
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
      host: "sql3.freesqldatabase.com",
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_USER,
      port: 3306,
    });
    const [rows, fields] = await connection.execute("SELECT * FROM todo");
    // console.log(rows);

    res.json({ rows });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const addItem = async function (req, res, next) {
  try {
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
      host: "sql3.freesqldatabase.com",
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_USER,
      port: 3306,
    });

    const result = await connection.query(
      `INSERT INTO todo (priority, date, type, item_description) VALUES ('${req.body.priority}', '${req.body.date}', '${req.body.type}', '${req.body.description}')`
    );
    // console.log(result[0].insertId);
    res.end(`${result[0].insertId}`);
    // console.log("inserted");
    connection.end();
  } catch (error) {
    console.log(`There was an error posting this : ${error}`);
  }
};
// // addItem();

const deleteItem = async function (req, res, next) {
  try {
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
      host: "sql3.freesqldatabase.com",
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_USER,
      port: 3306,
    });
    const result = await connection.query(
      `DELETE FROM todo WHERE item_id = ${req.params.itemID}`
    );
    console.log(result);
    console.log("deleted");
  } catch (error) {
    console.log(error);
  }
};
// // deleteItem();

module.exports = {
  addItem,
  deleteItem,
  getAllItems,
};
