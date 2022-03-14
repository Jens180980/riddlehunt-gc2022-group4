const db = require("../Models");

const User = db.user;

exports.create = async (req, res) => {
  try {
    const [user, didNotExist] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        name: req.body.name,
        password: req.body.password,
        proile_picture: req.body.profile_picture,
      },
    });

    const response = didNotExist
      ? { message: `Route created successfully`, user }
      : { message: `Route with same name already exist.` };

    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while creating the user.");
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while retrieving the users.");
  }
};

exports.getById = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Please provide an id.");
  }

  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (error) {
    res
      .status(500)
      .send(
        error.message ||
          `An error occured while retrieving the user with id = ${req.params.id}.`
      );
  }
};

exports.update = async (req, res) => {
  try {
    const updateStatus = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const message =
      updateStatus == 1
        ? "User updated successfully"
        : "Nothing to update or user not found";

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the user.");
  }
};

exports.delete = async (req, res) => {
  try {
    const deleteStatus = await User.destroy({
      where: { id: req.params.id },
    });

    const message =
      deleteStatus == 1 ? "User deleted successfully." : "User not found.";

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while deleting the user.");
  }
};

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
exports.getUserPlaces = async (req, res) => {
  try {
    const user = await user.findByPk(req.params.id);

    const places = user.getPlaces();

    res.send(places);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while getting the user places.");
  }
};

exports.getUserRoutes = async (req, res) => {
  try {
    const user = await user.findByPk(req.params.id);

    const routes = user.getRoutes();

    res.send(routes);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while getting the user routes.");
  }
};

exports.addAPlaceVisited = async (req, res) => {};

exports.addARoute = async (req, res) => {};

exports.ratePlace = async (req, res) => {
  // 1 - verify if place has been visited
  // 2 - add rating
};

exports.rateRoute = async (req, res) => {
  try {
    // 1 - verifiy if route has been completed
    // 2 - add rating
  } catch (error) {}
};
