const passport = require("passport");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");
require("../utils/auth/strategies/jwt");
require("../utils/middlewares/scopesValidationHandler");

module.exports = (app) => {
  const controller = require("../Controllers/category.controller");
  const router = require("express").Router();

  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),

    controller.getAll
  );
  router.get(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    controller.getById
  );

  router.get("/getPlaces/:id", controller.getPlacesOfACategory);

  router.post("/", scopesValidationHandler(["admin"]), controller.create);

  router.put("/:id", scopesValidationHandler(["admin"]), controller.update);

  router.delete("/:id", scopesValidationHandler(["admin"]), controller.delete);

  app.use("/category", router);
};
