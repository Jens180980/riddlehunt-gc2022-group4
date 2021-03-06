const categoryService =
  require("../Services/category.service").getCategoryService();

exports.create = async (req, res) => {
  try {
    const message = categoryService.create(req.body);
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while creating the category.");
  }
};

exports.getAll = async (req, res) => {
  try {
    const categories = await categoryService.getAll().then();
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
    const categories = await categoryService.getById(req.params.id);
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

exports.getPlacesOfACategory = async (req, res) => {
  try {
    const category = await categoryService.getPlacesOfACategory(
      req.body.categoryId
    );
    res.send(category);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the category.");
  }
};

exports.update = async (req, res) => {
  try {
    const message = await categoryService.update(req.body);

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the category.");
  }
};

exports.delete = async (req, res) => {
  try {
    const message = categoryService.delete(req.params.id);
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while deleting the category.");
  }
};
