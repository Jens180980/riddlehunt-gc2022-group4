function scopesValidationHandler(allowedScopes) {
  return function (req, res, next) {
    if (!req.user || (req.user && !req.user.dataValues.role)) {
      next(res.status(401).json({ message: "Missing scopes" }));
    }

    let isAllowed = false;
    allowedScopes.forEach((scope) => {
      console.log(scope, req.user.dataValues.role, "aldsjflsa;djflasdjf");
      if (req.user.dataValues.role == scope) {
        isAllowed = true;
      }
    });
    if (isAllowed) next();
    else next(res.status(401).json({ message: "Not allowed" }));
  };
}
module.exports = scopesValidationHandler;
