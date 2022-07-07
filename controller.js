const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
// const configDB = require("./Configure/configDB.js");
const routes = require("./Routes/routes.js");
// require("dotenv").config();

// app.use((req, res) => {
//   res.send("Hello World");
// });

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
      user: "sql3501239",
      password: "yS6L1p416X",
      database: "sql3501239",
      port: 3306,
    });

    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
