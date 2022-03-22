const boom = require("@hapi/boom");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const userService = require("../../../Services/user.service").getUserService();
const config = require("../../../Config/env.config");

passport.use(
  new Strategy(
    {
      secretOrKey: config.jwt_secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      try {
        const user = await userService.getByEmail(tokenPayload.email);
        if (!user) {
          return cb(boom.unauthorized("User missing").message("User missing"));
        }

        user.password = "";

        cb(null, { ...user });
      } catch (error) {
        cb(boom.unauthorized().message("Error: " + error));
      }
    }
  )
);
