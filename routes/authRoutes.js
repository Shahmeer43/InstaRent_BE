const express = require("express");
const schemas = require("../schemas");
const controller = require("../controllers");
const constants = require("../shared/constants");
const middlewares = require("../shared/middlewares");

const router = express.Router();

const { signUp } = controller;
const { signupSchema } = schemas;
const { validateRequest } = middlewares;
const { auth } = constants.endPointConstants;

router.post(auth.signUp, validateRequest(signupSchema), signUp);

module.exports = router;
