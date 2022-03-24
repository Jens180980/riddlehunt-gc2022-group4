const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");

module.exports = (app) => {
  const controller = require("../Controllers/user.controller");
  const router = require("express").Router();

  router.get(
    "/",
    // scopesValidationHandler(["admin"]),
    controller.getAll
  );
  router.get(
    "/:id",
    //  scopesValidationHandler(["admin"]),
    controller.getById
  );

  // router.post("/", controller.create);

  router.put(
    "/:id",
    // scopesValidationHandler(["admin", "user"]),
    controller.update
  );

  router.delete(
    "/:id",
    // scopesValidationHandler(["admin", "user"]),
    controller.delete
  );

  app.use("/user", router);
};
