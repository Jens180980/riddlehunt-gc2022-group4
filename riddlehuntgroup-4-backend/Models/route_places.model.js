module.exports = (sequelize, Sequelize) => {
  const Route_Places = sequelize.define(
    "route_places",
    {
      position_in_route: { type: Sequelize.INTEGER },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Route_Places;
};
