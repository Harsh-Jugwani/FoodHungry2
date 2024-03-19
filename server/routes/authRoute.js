const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/authController");

//middleware

router.get("/", test);
//Register Route
router.post("/register", registerUser);

//login Route
router.post("/login", loginUser);



module.exports = router;