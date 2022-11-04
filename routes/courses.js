var express = require('express');
const { getCourses } = require("../controllers/courses");
var router = express.Router();

router.get("/:id", getCourses)

module.exports = router;