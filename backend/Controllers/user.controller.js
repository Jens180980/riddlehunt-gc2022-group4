const userService = require("../Services/user.service").getUserService();

exports.create = async (req, res) => {
  try {
    const response = await userService.create(req.body);

    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while creating the user.");
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
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
    const user = userService.getById(req.params.id);
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
    const updateStatus = userService.update(req.body);

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
    const deleteStatus = userService.delete(req.body.userId);

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
    const places = await userService.getUserPlaces(req.params.id);
    res.send(places);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while getting the user places.");
  }
};

exports.getUserRoutes = async (req, res) => {
  try {
    const routes = userService.getUserRoutes(req.params.id);

    res.send(routes);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while getting the user routes.");
  }
};

exports.addAPlaceVisited = async (req, res) => {
  try {
    const message = await userService.addAPlaceVisited(
      req.body.userId,
      req.body.userId,
      req.body.rating
    );
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(
        error.message || `An error occured while adding the place to the route.`
      );
  }
};

exports.addARoute = async (req, res) => {
  try {
    const message = userService.addARoute(
      req.body.userId,
      req.body.routeId,
      req.body.rating
    );
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(
        error.message || `An error occured while adding the place to the route.`
      );
  }
};

// is rating possible at any point ???
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
