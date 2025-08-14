// this config file is for sequelize library
const dbConfig = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
};

module.exports = dbConfig;
