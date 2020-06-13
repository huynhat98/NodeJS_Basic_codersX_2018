/*
module.exports = {
    a: 1,
    b: 2
};
// tuong tu voi
module.exports.a = 1;
module.exports.b = 2;
*/

var db = require("../db");
var shortid = require("shortid");

module.exports.index =  function (req, res) {
  res.render("./users/index", {
    // get voi key cua lowdb
    users: db.get("users").value(),
  });
};

module.exports.search = function (req, res) {
  console.log(req.query);
  console.log(db.get("users").value());

  var q = req.query.q;
  var matchedUsers = db
    .get("users")
    .value()
    .filter(function (user) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

  res.render("users/index", {
    users: matchedUsers,
  });
};

module.exports.get = function (req, res) {
  var id = req.params.id;
  // console.log(typeof id);

  var user = db.get("users").find({ id: id }).value();
  res.render("users/view", {
    user: user,
  });
};

module.exports.create = function (req, res) {
  res.render("users/create");
};

module.exports.postCreate = function (req, res) {
  console.log(req.body);
  req.body.id = shortid.generate();
  db.get("users").push(req.body).write();
  res.redirect("/users");
};