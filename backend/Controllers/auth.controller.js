const passport = require("passport");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("../Config/env.config");

//Basic strategy

class AuthController {
  userService = require("../Services/user.service").getUserService();

  signIn = (req, res, next) => {
    passport.authenticate("basic", function (error, user) {
      try {
        if (error || !user) {
          next(
            res.status(401).json({
              message: "Unauthorized",
            })
          );
        }
        req.login(user, { session: false }, async function (error) {
          if (error) {
            next(
              res.status(400).json({
                message: error + ", Some error occurred loging user.",
              })
            );
          }

          const { email, name, role } = user;
          /// .env
          const expireTime = 30;
          const expireDate = moment.utc().add(expireTime, "minutes");

          const payload = {
            email: email,
            name,
            role,
            // tokenExpiresIn: expireDate,
          };

          const token = jwt.sign(payload, config.jwt_secret, {
            expiresIn: expireTime + "m",
          });

          return res.status(200).json({ token, user: { email, name, role } });
        });
      } catch (error) {
        next(
          res.status(400).json({
            message: error + ", Some error occurred loging creating user.",
          })
        );
      }
    })(req, res, next);
  };

  signUp = (req, res, next) => {
    const reqUser = req.body;

    try {
      let createdUser;
      //
      this.userService.createUser(reqUser).then(async (user) => {
        createdUser = user;
        res.status(201).json({
          data: createdUser.email,
          message: "User created",
        });
      });
    } catch (error) {
      next(
        res.status(201).json({
          message: `${error},  Some error occurred while creating user.`,
        })
      );
    }
  };
}
module.exports = AuthController;
