module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "category",
    {
      name: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.route);
  };

  return Category;
};
