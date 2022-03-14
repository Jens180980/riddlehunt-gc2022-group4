module.exports = (sequelize, Sequelize) => {
  const User_places = sequelize.define(
    "user_places",
    {
      rating: { type: Sequelize.INTEGER },

      // Future feature
      //comment : {type: Sequelize.STRING}
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User_places;
};
