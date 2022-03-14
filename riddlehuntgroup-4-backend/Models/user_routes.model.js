module.exports = (sequelize, Sequelize) => {
  const User_routes = sequelize.define(
    "user_routes",
    {
      rating: { type: Sequelize.INTEGER },

      // Future feature
      //comment: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User_routes;
};
