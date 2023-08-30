const express = require("express");
const { register } = require("../../controllers/users/usersCtrl");

const usersRouter = express.Router();

//!register
usersRouter.post("/api/v1/users/register", register);

module.exports = usersRouter;
