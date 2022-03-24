module.exports = (sequelize, Sequelize) => {
  const Place = sequelize.define(
    "place",
    {
      name: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      latitude: { type: Sequelize.STRING },
      longitude: { type: Sequelize.STRING },
      image: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Place.associate = (models) => {
    Place.belongsToMany(models.route, {
      through: models.route_places,
    });
    Place.belongsToMany(models.category, {
      through: "place_category",
    });
  };

  return Place;
};
