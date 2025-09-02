const express = require("express");

const { logInSchema, signUpSchema } = require("../schemas");
const { validateRequest } = require("../shared/middlewares");
const { endPointConstants } = require("../shared/constants");
const { logIn, signUp, refreshAccessToken } = require("../controllers");

const router = express.Router();

const { auth } = endPointConstants;

router.post(auth.signUp, validateRequest(signUpSchema), signUp);
router.post(auth.logIn, validateRequest(logInSchema), logIn);
router.post(auth.token, refreshAccessToken);

module.exports = router;
