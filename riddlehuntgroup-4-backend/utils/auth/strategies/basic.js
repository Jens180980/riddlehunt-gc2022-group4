const { BasicStrategy } = require("passport-http");
const passport = require("passport");
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const usersService = require("../../../Services/user.service").getUserService();

passport.use(
  new BasicStrategy(function (username, password, cb) {
    try {
      usersService.getByEmail(username).then((user) => {
        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        if (!bcrypt.compareSync(password, user.password)) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;

        return cb(null, user);
      });
    } catch (error) {
      return cb(error);
    }
  })
);
