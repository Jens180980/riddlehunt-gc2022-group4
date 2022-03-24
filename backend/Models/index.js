const dbConfig = require("../Config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
const models = [];

const modules = [
  require("./category.model"),
  require("./place.model"),
  require("./route_places.model"),
  require("./route.model"),
  require("./user_places.model"),
  require("./user_routes.model"),
  require("./user.model"),
];

modules.forEach((module) => {
  const model = module(sequelize, Sequelize);

  db[model.name] = model;
  console.log(model.name);
  models.push(model);
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

models.forEach((model) => {
  if (db[model.name].associate) db[model.name].associate(db);
});

module.exports = db;
