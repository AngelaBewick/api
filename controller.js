require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const routes = require("./Routes/routes.js");

//solve CORS error with middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use("/api/v1", routes);

const port = process.env.PORT || 3000;

const start = async function () {
  try {
    await mysql.createConnection({
      host: "sql3.freesqldatabase.com",
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_USER,
      port: 3306,
    });
    console.log(process.env.DATABASE_USER);
    console.log(typeof process.env.DATABASE_USER);
    console.log(process.env.DATABASE_PASSWORD);
    console.log(typeof process.env.DATABASE_PASSWORD);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
