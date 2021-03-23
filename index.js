const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var useRoute = require("./routes/user.route");
var port = 3000;

var app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    name: "trang chu",
  });
});

app.use("/users", useRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
