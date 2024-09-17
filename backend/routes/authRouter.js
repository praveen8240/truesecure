const express = require("express");
const { signup, login, logout} = require('../auth/auth');
const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);

module.exports = router;
