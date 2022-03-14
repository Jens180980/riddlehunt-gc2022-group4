const db = require("../Models");

const Route = db.route;

exports.create = async (req, res) => {
  try {
    const [route, didNotExist] = await Route.findOrCreate({
      where: { name: req.body.name },
      defaults: {
        time_in_hours: req.body.time_in_hours,
        distance_in_km: req.body.distance_in_km,
      },
    });

    const response = didNotExist
      ? { message: `Route created successfully`, route }
      : { message: `Route with same name already exist.` };

    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while creating the route.");
  }
};

exports.getAll = async (req, res) => {
  try {
    const routes = await Route.findAll();
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
    const route = await Route.findByPk(req.params.id, {
      include: { model: db.place },
    });
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
  if (!req.params.id) {
    res.status(400).send("Please provide an id.");
  }

  try {
    const route = await Route.findByPk(req.params.id);
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
    const updateStatus = await Route.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const message =
      updateStatus == 1
        ? "Route updated successfully"
        : "Nothing to update or route not found";

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the Route.");
  }
};

exports.delete = async (req, res) => {
  try {
    const deleteStatus = await Route.destroy({
      where: { id: req.params.id },
    });

    const message =
      deleteStatus == 1 ? "Route deleted successfully." : "Route not found.";

    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while deleting the route.");
  }
};

exports.addAPlace = async (req, res) => {
  try {
    const route = await Route.findByPk(req.body.routeId);
    const place = await db.place.findByPk(req.body.placeId);

    const isInRoute = await route.hasPlace(place);

    if (isInRoute) {
      res.send("Place already in route.");
      return;
    }

    await route.addPlace(place, {
      through: { position_in_route: req.body.position_in_route },
    });

    res.send("Place added successfully");
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
