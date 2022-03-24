const db = require("../Models");
const Place = db.place;

class PlaceService {
  static PlaceService = null;

  static getPlaceService() {
    if (this.PlaceService == null) {
      this.PlaceService = new PlaceService();
    }

    return this.PlaceService;
  }

  async create(newPlace) {
    const [place, didNotExist] = await Place.findOrCreate({
      where: { name: newPlace.name },
      defaults: {
        description: newPlace.description,
        latitude: newPlace.latitude,
        longitude: newPlace.longitude,
        image: newPlace.imagePath,
      },
    });

    const message = didNotExist
      ? { message: `Place created successfully`, place }
      : { message: `Place already exist.` };

    return message;
  }

  async getAll() {
    const places = await Place.findAll();

    return places;
  }

  async getById(id) {
    const place = await Place.findByPk(id);
    return place;
  }

  async update(place) {
    const updateStatus = await Place.update(place.body, {
      where: {
        id: place.id,
      },
    });

    const message =
      updateStatus == 1
        ? "Place updated successfully"
        : "Nothing to update or place not found";

    return message;
  }

  async delete(id) {
    const deleteStatus = await Place.destroy({
      where: { id },
    });

    const message =
      deleteStatus == 1 ? "Place deleted successfully." : "Place not found.";

    return message;
  }
}

module.exports = PlaceService;
