const express = require("express");
const router = express.Router();
const app = express();

// //import functions from repoService
const { getAllItems, addItem, deleteItem } = require("../repoService.js");
console.log(getAllItems);

// //use callbacks for specific routes
router.route("/").get(getAllItems).post(addItem);
// .post(addItem);
router.route("/:itemID").delete(deleteItem);
// //add ability to update a todo item
// //.get(getTask).patch(updateTask)

module.exports = router;
