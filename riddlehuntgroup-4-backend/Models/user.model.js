module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      name: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      profile_picture: { type: Sequelize.STRING },
      role: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  User.associate = (models) => {
    User.belongsToMany(models.place, { through: models.user_places });
    User.belongsToMany(models.route, { through: models.user_routes });
  };

  return User;
};
