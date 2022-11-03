const express = require("express");
const router = express.Router();

//Controllers
const usersEmailRouter=require("../modules/usersEmail");
const usersDataRouter=require("../modules/usersData");

//Module vise api
router.use("/users-email",usersEmailRouter);
router.use("/users",usersDataRouter);



module.exports = router;
