const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");

module.exports = (app) => {
  const controller = require("../Controllers/route.controller");
  const router = require("express").Router();

  router.get("/", controller.getAll);
  router.get("/:id", controller.getById);
  router.get("/withPlaces/:id", controller.getOneWithPlaces);

  router.post(
    "/",
    // scopesValidationHandler(["admin"]),
    controller.create
  );
  router.post(
    "/addPlaceToRoute",
    // scopesValidationHandler(["admin"]),
    controller.addAPlace
  );

  router.put(
    "/:id",
    // scopesValidationHandler(["admin"]),
    controller.update
  );

  router.delete(
    "/:id",
    // scopesValidationHandler(["admin"]),
    controller.delete
  );

  app.use("/route", router);
};
