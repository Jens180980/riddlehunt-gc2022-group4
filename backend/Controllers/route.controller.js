const routeService = require("../Services/route.service").getRouteService();

exports.create = async (req, res) => {
  try {
    const message = routeService.create(req.body);
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while creating the route.");
  }
};

exports.getAll = async (req, res) => {
  try {
    const routes = await routeService.getAll();
    res.send(routes);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while retrieving the routes.");
  }
};

exports.getOneWithPlaces = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Please provide an id.");
  }

  try {
    const route = await routeService.getOneWithPlaces();
    res.send(route);
  } catch (error) {
    res
      .status(500)
      .send(
        error.message ||
          `An error occured while retrieving the route with id = ${req.params.id}.`
      );
  }
};

exports.getById = async (req, res) => {
  // if (!req.params.id) {
  //   res.status(400).send("Please provide an id.");
  //   return;
  // }

  try {
    const route = routeService.getById(req.params.id);
    res.send(route);
  } catch (error) {
    res
      .status(500)
      .send(
        error.message ||
          `An error occured while retrieving the route with id = ${req.params.id}.`
      );
  }
};

exports.update = async (req, res) => {
  try {
    const message = routeService.update(req.body);
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the Route.");
  }
};

exports.delete = async (req, res) => {
  try {
    const message = routeService.delete(req.params.id);
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while deleting the route.");
  }
};

exports.addAPlace = async (req, res) => {
  try {
    const message = routeService.addAPlace(
      req.body.routeId,
      req.body.placeId,
      req.body.position_in_route
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

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
exports.addMultiplePlaces = async (req, res) => {
  try {
  } catch (error) {}
};

exports.removeAPlace = async (req, res) => {
  try {
  } catch (error) {}
};
exports.removeMultiplePlaces = async (req, res) => {
  try {
  } catch (error) {}
};
