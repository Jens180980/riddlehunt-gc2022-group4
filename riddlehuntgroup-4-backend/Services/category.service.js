const db = require("../Models");

const Category = db.category;

class CategoryService {
  static CategoryService = null;

  static getCategoryService() {
    if (this.CategoryService == null)
      this.CategoryService = new CategoryService();

    return this.CategoryService;
  }

  async create(newCategory) {
    const [category, didNotExist] = await Category.findOrCreate({
      where: { name: newCategory.name },
    });

    const response = didNotExist
      ? { message: `Category created successfully`, category }
      : { message: `Category already exist.` };

    return response;
  }

  async getAll() {
    const categories = await Category.findAll();
    return categories;
  }

  async getById(id) {
    const categories = await Category.findByPk(id);
    return categories;
  }

  async getPlacesOfACategory(categoryId) {
    const place = db.Place;
    const category = await Category.findByPk(categoryId, {
      include: { place },
    });

    return category;
  }

  async update(category) {
    const updateStatus = await Category.update(category, {
      where: {
        id: category.id,
      },
    });

    const message =
      updateStatus == 1
        ? "Category updated successfully"
        : "Nothing to update or category not found";

    return message;
  }

  async delete(id) {
    const deleteStatus = await Category.destroy({
      where: { id },
    });

    const message =
      deleteStatus == 1
        ? "Category deleted successfully"
        : "Category not found";

    return message;
  }
}

module.exports = CategoryService;
