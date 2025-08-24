// this config file is for sequelize library
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const dbConfig = {
  development: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    timezone: process.env.TIMEZONE,
    password: process.env.DB_PASSWORD,
  },
  staging: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    timezone: process.env.TIMEZONE,
    password: process.env.DB_PASSWORD,
  },
  production: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    timezone: process.env.TIMEZONE,
    password: process.env.DB_PASSWORD,
  },
};

module.exports = dbConfig;
