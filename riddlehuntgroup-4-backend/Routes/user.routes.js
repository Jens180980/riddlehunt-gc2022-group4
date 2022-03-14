module.exports = (app) => {
  const controller = require("../Controllers/user.controller");
  const router = require("express").Router();

  router.get("/", controller.getAll);
  router.get("/:id", controller.getById);

  router.post("/", controller.create);

  router.put("/:id", controller.update);

  router.delete("/:id", controller.delete);

  app.use("/user", router);
};
