const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");

module.exports = (app) => {
  const controller = require("../Controllers/place.controller");
  const router = require("express").Router();

  router.get("/", controller.getAll);
  router.get("/:id", controller.getById);

  router.post("/", scopesValidationHandler(["admin"]), controller.create);

  router.put("/:id", scopesValidationHandler(["admin"]), controller.update);

  router.delete("/:id", scopesValidationHandler(["admin"]), controller.delete);

  app.use("/place", router);
};
