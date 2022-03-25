module.exports = (sequelize, Sequelize) => {
  const Place_category = sequelize.define(
    "place_category",
    {},
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Place_category;
};
