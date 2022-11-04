const express = require("express");
const { registerUser, loginUser, authenticateUser } = require("../controllers/users");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get('/me', authenticateUser)


module.exports = router;
