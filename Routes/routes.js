const express = require("express");
const router = express.Router();

// //import functions from repoService
// const { getAllItems, addItem, deleteItem } = require("../repoService.js");
const { getAllItems } = require("../repoService.js");
console.log(getAllItems);

// //use callbacks for specific routes
router.route("/").get(getAllItems);
// .post(addItem);
// router.route("/:itemID").delete(deleteItem);
// //add ability to update a todo item
// //.get(getTask).patch(updateTask)
module.exports = router;
