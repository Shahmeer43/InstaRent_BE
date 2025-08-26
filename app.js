const express = require("express");
const routes = require("./routes");
const { endPointConstants } = require("./shared/constants");

const app = express();

const { authRoutes } = routes;
const { auth } = endPointConstants;

app.use(express.json());
app.use(auth.baseRoute, authRoutes);

module.exports = app;
