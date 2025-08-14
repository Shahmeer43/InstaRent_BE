require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");

const app = express();

app.listen(process.env.SERVER_PORT);
