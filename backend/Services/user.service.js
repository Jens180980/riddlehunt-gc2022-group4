const db = require("../Models");
const User = db.user;

const bcrypt = require("bcrypt");

class UserService {
  static UserService = null;

  static getUserService() {
    if (this.UserService == null) this.UserService = new UserService();

    return this.UserService;
  }

  async createUser(newUser) {
    const [user, didNotExist] = await User.findOrCreate({
      where: { email: newUser.email },
      defaults: {
        name: newUser.name,
        password: bcrypt.hashSync(newUser.password, 5),
        profile_picture: newUser.profile_picture,
        role: "user",
      },
    });

    const response = didNotExist
      ? { message: `Route created successfully`, user }
      : { message: `Route with same name already exist.` };

    return response;
  }

  async getAll() {
    const users = await User.findAll();
    return users;
  }

  async getById(id) {
    const user = User.findByPk(id);
    return user;
  }

  async getByEmail(email) {
    const user = User.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  async update(user) {
    const updateStatus = await User.update(user, {
      where: {
        id: user.id,
      },
    });

    return updateStatus;
  }

  async delete(id) {
    const deleteStatus = await User.destroy({ where: { id } });
    return deleteStatus;
  }

  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  async getUserPlaces(id) {
    const user = await user.findByPk(id);

    const places = user.getPlaces();

    return places;
  }
  async getUserRoutes(id) {
    const user = await user.findByPk(id);

    const routes = await user.getRoutes();

    return routes;
  }
  async addAPlaceVisited(idUser, idPlace, rating) {
    const user = await User.findByPk(idUser);
    const place = await db.place.findByPk(idPlace);

    const hasAlreadyPlace = await user.hasPlace(place);

    if (hasAlreadyPlace) return "User has already explored the place";

    await user.addPlace(place, {
      through: { rating: rating || 0 },
    });

    return "place added successfully";
  }
  async addARoute(userId, routeId, rating) {
    const user = await User.findByPk(userId);
    const route = await db.route.findByPk(routeId);

    const hasAlreadyRoute = await user.hasRoute(route);

    if (hasAlreadyRoute) return "User has already explored the route";

    await user.addRoute(route, {
      through: { rating: rating || 0 },
    });

    return "Route added successfully";
  }

  async ratePlace() {}
  async rateRoute() {}
}

module.exports = UserService;
