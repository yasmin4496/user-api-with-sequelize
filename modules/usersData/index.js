const express = require("express");
const router = express.Router();

// //create module
const { userDataValidation } = require("./Validation");
const { addDataOfUser } = require("./Controller");
const { getAllDataOfUser } = require("./Controller");
const { deleteDataOfUser } = require("./Controller");

// //add user data
router.post("/", userDataValidation, addDataOfUser);

// //get all email
router.get("/", getAllDataOfUser);

// //delete email
router.delete("/:id", deleteDataOfUser);

module.exports = router;
