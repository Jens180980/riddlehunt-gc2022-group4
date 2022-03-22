const db = require("./Models");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./Config/data");

const corsOption = {
  //   origin: "",
};

db.sequelize.sync({ force: true }).then(async () => {
  console.log("Sync db");
  db.category.bulkCreate(data.category);
  db.route.bulkCreate(data.route);
  db.place.bulkCreate(data.place);
  db.route_places.bulkCreate(data.route_places);
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

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
