const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const { getAllUsers,addUser } = require("../controllers/user");

router.get(
  "/users",
  getAllUsers
);

router.post(
  "/user/add",
    check("name")
    .isLength({ min: 3 })
    .withMessage("name must be atleast 3chars long"),
    check("email")
    .isEmail()
    .withMessage("Please enter valid email address"),
  addUser
);

module.exports = router;
