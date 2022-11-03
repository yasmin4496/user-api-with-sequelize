const express = require("express");
const router = express.Router();

//create module
const { emailValidation } = require("./validation");
const { addEmailOfUser } = require("./controller");
const { emailListing } = require("./Controller");
const { deleteEmailOfUser } = require("./Controller");

//add user email
router.post("/",emailValidation,addEmailOfUser);

//get all email
router.get("/", emailListing);

//delete email
 router.delete("/:id", deleteEmailOfUser);

module.exports = router;
