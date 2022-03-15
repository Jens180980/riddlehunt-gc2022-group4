module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "category",
    {
      name: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      icon: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.route);
    Category.belongsTo(models.category);
  };

  return Category;
};
