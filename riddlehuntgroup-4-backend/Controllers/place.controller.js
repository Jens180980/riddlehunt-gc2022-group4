const db = require("../Models");

const Place = db.place;

exports.create = async (req, res) => {
  if (!req.name) {
  }
  try {
    const [place, didNotExist] = await Place.findOrCreate({
      where: { name: req.body.name },
      defaults: {
        description: req.body.description,
        location: req.body.location,
        image: req.body.image,
      },
    });

    const response = didNotExist
      ? { message: `Place created successfully`, place }
      : { message: `Place already exist.` };

    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while creating the place.");
  }
};

exports.getAll = async (req, res) => {
  try {
    const places = await Place.findAll();
    res.send(places);
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
    const places = await Place.findByPk(req.params.id);
    res.send(places);
  } catch (error) {
    res
      .status(500)
      .send(
        error.message ||
          `An error occured while retrieving the Place with id = ${req.params.id}.`
      );
  }
};

exports.update = async (req, res) => {
  try {
    const updateStatus = await Place.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const message =
      updateStatus == 1
        ? "Place updated successfully"
        : "Nothing to update or place not found";

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the place.");
  }
};

exports.delete = async (req, res) => {
  try {
    const deleteStatus = await Place.destroy({
      where: { id: req.params.id },
    });

    const message =
      deleteStatus == 1 ? "Place deleted successfully." : "Place not found.";

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while deleting the place.");
  }
};
