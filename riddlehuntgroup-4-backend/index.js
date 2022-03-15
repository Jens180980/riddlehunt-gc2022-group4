const db = require("./models");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOption = {
  //   origin: "",
};

db.sequelize.sync().then(() => {
  console.log("Sync db");
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
