require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const pool = require("./config/db");

const app = express();

app.listen(process.env.SERVER_PORT);
