const placeService = require("../Services/place.service").getPlaceService();
const imgUploader = require("imgbb-uploader");
require("dotenv").config();

exports.create = async (req, res) => {
  try {
    const imgUploadResponse = await imgUploader(
      process.env.IMGBB_API_KEY,
      req.body.imagePath
    );
    const imagePath = imgUploadResponse.display_url;
    console.log(req.body);
    console.log(imagePath);
    req.body.imagePath = imagePath;
    const message = await placeService.create(req.body);
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while creating the place.");
  }
};

exports.getAll = async (req, res) => {
  try {
    const places = await placeService.getAll();
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
    const place = await placeService.getById(req.params.id);
    res.send(place);
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
    const message = await placeService.update(req.body);
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while updating the place.");
  }
};

exports.delete = async (req, res) => {
  try {
    const message = placeService.delete(id);
    res.send(message);
  } catch (error) {
    res
      .status(500)
      .send(error.message || "An error occured while deleting the place.");
  }
};
