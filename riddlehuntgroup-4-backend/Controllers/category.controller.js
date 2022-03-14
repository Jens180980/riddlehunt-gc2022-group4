const db = require("../Models");

const Category = db.category;

exports.create = async (req, res) => {
  try {
    const [category, didNotExist] = await Category.findOrCreate({
      where: { name: req.body.name },
    });

    const response = didNotExist
      ? { message: `Category created successfully`, category }
      : { message: `Category already exist.` };

    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while creating the category.");
  }
};

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while retrieving the places.");
  }
};

exports.getById = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Please provide an id.");
  }

  try {
    const categories = await Category.findByPk(req.params.id);
    res.send(categories);
  } catch (error) {
    res
      .status(500)
      .send(
        error.message ||
          `An error occured while retrieving the category with id = ${id}.`
      );
  }
};

exports.getRoutesOfACategory = async (req, res) => {
  try {
    const route = db.Route;
    const category = await Category.findByPk(req.body.categoryId, {
      include: { route },
    });
    res.send(category);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the category.");
  }
};

exports.update = async (req, res) => {
  try {
    const updateStatus = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const message =
      updateStatus == 1
        ? "Category updated successfully"
        : "Nothing to update or category not found";

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the category.");
  }
};

exports.delete = async (req, res) => {
  try {
    const deleteStatus = await Category.destroy({
      where: { id: req.params.id },
    });

    const message =
      deleteStatus == 1
        ? "Category deleted successfully"
        : "Category not found";

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while deleting the category.");
  }
};
