module.exports = (sequelize, Sequelize) => {
  const Route = sequelize.define(
    "route",
    {
      name: { type: Sequelize.STRING },
      time_in_hours: { type: Sequelize.FLOAT },
      distance_in_km: { type: Sequelize.FLOAT },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Route.associate = (models) => {
    Route.belongsToMany(models.place, {
      through: models.route_places,
    });

    Route.belongsTo(models.category);
  };

  return Route;
};
