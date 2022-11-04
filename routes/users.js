var express = require('express');
const { getUsers } = require("../controllers/users");
var router = express.Router();

router.get("/", getUsers)

module.exports = router;
