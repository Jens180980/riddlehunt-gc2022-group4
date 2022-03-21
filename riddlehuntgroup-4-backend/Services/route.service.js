const db = require("../Models");

const Route = db.route;

class RouteService {
  static RouteService = null;

  static getRouteService() {
    if (this.RouteService == null) this.RouteService = new RouteService();
    return this.RouteService;
  }

  async create(newRoute) {
    const [route, didNotExist] = await Route.findOrCreate({
      where: { name: newRoute.name },
      defaults: {
        time_in_hours: newRoute.time_in_hours,
        distance_in_km: newRoute.distance_in_km,
      },
    });

    const response = didNotExist
      ? { message: `Route created successfully`, route }
      : { message: `Route with same name already exist.` };

    return response;
  }

  async getAll() {
    const routes = await Route.findAll();
    return routes;
  }

  async getOneWithPlaces(id) {
    const route = await Route.findByPk(id, {
      include: { model: db.place },
    });
    return route;
  }

  async getById(id) {
    const route = await Route.findByPk(id);
    return route;
  }

  async update(route) {
    const updateStatus = await Route.update(req.body, {
      where: {
        id: route.id,
      },
    });

    const message =
      updateStatus == 1
        ? "Route updated successfully"
        : "Nothing to update or route not found";

    return message;
  }

  async delete(id) {
    const deleteStatus = await Route.destroy({
      where: { id },
    });

    const message =
      deleteStatus == 1 ? "Route deleted successfully." : "Route not found.";

    reutnr(message);
  }

  async addAPlace(routeId, placeId, position_in_route) {
    const route = await Route.findByPk(routeId);
    const place = await db.place.findByPk(placeId);

    const isInRoute = await route.hasPlace(place);

    if (isInRoute) return "Place already in route.";

    await route.addPlace(place, {
      through: { position_in_route },
    });

    return "Place added successfully";
  }

  async addMultiplePlaces() {}
  async removeAPlace() {}
  async removeMultiplePlaces() {}
}

module.exports = RouteService;
