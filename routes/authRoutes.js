const express = require("express");
const { logIn, signUp } = require("../controllers");
const { logInSchema, signUpSchema } = require("../schemas");
const { validateRequest } = require("../shared/middlewares");
const { endPointConstants } = require("../shared/constants");

const router = express.Router();

const { auth } = endPointConstants;

router.post(auth.signUp, validateRequest(signUpSchema), signUp);
router.post(auth.logIn, validateRequest(logInSchema), logIn);

module.exports = router;
