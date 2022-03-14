module.exports = (app) => {
  const controller = require("../Controllers/place.controller");
  const router = require("express").Router();

  router.get("/", controller.getAll);
  router.get("/:id", controller.getById);

  router.post("/", controller.create);

  router.put("/:id", controller.update);

  router.delete("/:id", controller.delete);

  app.use("/place", router);
};
