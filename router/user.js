const express = require("express");
const router = express.Router();
const { SignUP, SignIn } = require("../controllers/users.controllers");

const {
  registerValidate,
  validation,
  loginValidate,
} = require("../middlewares/validateUser");

//resgister=sign up=create an account
router.post("/register", registerValidate(), validation, SignUP);

//login=sign in
router.post("/login", loginValidate(), validation, SignIn);

module.exports = router;