const express = require("express");
const { signUp } = require("../controllers");
const { signupSchema } = require("../schemas");
const { validateRequest } = require("../shared/middlewares");
const { endPointConstants } = require("../shared/constants");

const router = express.Router();

const { auth } = endPointConstants;

router.post(auth.signUp, validateRequest(signupSchema), signUp);

module.exports = router;
