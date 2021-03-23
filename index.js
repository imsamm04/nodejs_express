const express = require("express");
var bodyParser = require("body-parser");

var useRoute = require("./routes/user.route");
var authRoute = require("./routes/auth.route");
var port = 3000;

var app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    name: "Home page",
  });
});

app.use("/users", useRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
