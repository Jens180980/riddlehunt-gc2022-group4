const express = require("express");
const emailValidationHandler = require("../utils/middlewares/emailValidationHandler");
const AuthController = require("../Controllers/auth.controller");

//Basic strategy

require("../utils/auth/strategies/basic");

function authApi(app) {
  const router = express.Router();
  app.use("/api/auth", router);

  const authController = new AuthController();

  router.post("/sign-in", emailValidationHandler(), authController.signIn);

  router.post("/sign-up", emailValidationHandler(), authController.signUp);
}
module.exports = authApi;
