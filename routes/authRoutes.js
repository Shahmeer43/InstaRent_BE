const express = require("express");
const constants = require("../constants");
const controller = require("../controllers");

const router = express.Router();

const { signUp } = controller;
const { auth } = constants.endPointConstants;

router.post(auth.signUp, signUp);

module.exports = router;
