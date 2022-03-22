require("dotenv").config();

const config = {
  jwt_secret: process.env.JWT_SECRET,
};

module.exports = config;
