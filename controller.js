const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const configDB = require("./Configure/configDB.js");
const routes = require("./Routes/routes.js");

// app.use((req, res) => {
//   res.send("Hello World");
// });
app.use(express.json());
app.use("/api/v1", routes);

const port = process.env.PORT || 3000;

const start = async function () {
  try {
    await mysql.createConnection(configDB.db);

    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
