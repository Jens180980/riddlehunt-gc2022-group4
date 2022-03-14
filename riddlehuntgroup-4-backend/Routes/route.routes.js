module.exports = (app) => {
  const controller = require("../Controllers/route.controller");
  const router = require("express").Router();

  router.get("/", controller.getAll);
  router.get("/:id", controller.getById);
  router.get("/withPlaces/:id", controller.getOneWithPlaces);

  router.post("/", controller.create);
  router.post("/addPlaceToRoute", controller.addAPlace);

  router.put("/:id", controller.update);

  router.delete("/:id", controller.delete);

  app.use("/route", router);
};
