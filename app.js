const express = require("express");
const routes = require("./routes");
const constants = require("./shared/constants");

const app = express();

const { authRoutes } = routes;
const { auth } = constants.endPointConstants;

app.use(express.json());
app.use(auth.baseRoute, authRoutes);

module.exports = app;
