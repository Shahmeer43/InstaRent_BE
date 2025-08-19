const express = require("express");
const routes = require("./routes");
const constants = require("./constants");

const app = express();

const { auth } = constants.endPointConstants;
const { authRoutes } = routes;

app.use(auth.baseRoute, authRoutes);

module.exports = app;
