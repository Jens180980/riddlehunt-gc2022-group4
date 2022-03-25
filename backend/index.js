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
  await db.category.bulkCreate(data.category);
  await db.place.bulkCreate(data.place);
  db.place_category.bulkCreate([
    {
      categoryId: 2,
      placeId: 1,
    },
    {
      categoryId: 3,
      placeId: 1,
    },
    {
      categoryId: 4,
      placeId: 1,
    },
    {
      categoryId: 5,
      placeId: 2,
    },
    {
      categoryId: 3,
      placeId: 2,
    },
    {
      categoryId: 6,
      placeId: 3,
    },
    {
      categoryId: 2,
      placeId: 3,
    },
    {
      categoryId: 7,
      placeId: 4,
    },
    {
      categoryId: 5,
      placeId: 5,
    },
    {
      categoryId: 8,
      placeId: 6,
    },
    {
      categoryId: 2,
      placeId: 7,
    },
    {
      categoryId: 3,
      placeId: 7,
    },
    {
      categoryId: 2,
      placeId: 8,
    },
    {
      categoryId: 8,
      placeId: 8,
    },
    {
      categoryId: 4,
      placeId: 4,
    },
  ]);
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
