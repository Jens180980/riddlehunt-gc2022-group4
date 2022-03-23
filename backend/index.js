const db = require("./Models");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./Config/data");
const userService = require("./Services/user.service").getUserService();

const corsOption = {
  //   origin: "",
};

db.sequelize.sync({ force: true }).then(async () => {
  console.log("Sync db");
  userService.createUser({
    name: "admin",
    password: "admin",
    email: "admin@admin.com",
    role: "admin",
    profile_picture: "",
  });
  db.category.bulkCreate(data.category);
  // db.route.bulkCreate(data.route);
  db.place.bulkCreate(data.place);
  // db.route_places.bulkCreate(data.route_places);
});

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));

require("./Routes/category.routes")(app);
require("./Routes/place.routes")(app);
require("./Routes/route.routes")(app);
require("./Routes/user.routes")(app);
require("./Routes/auth.routes")(app);

app.listen(process.env.PORT || 5000);
