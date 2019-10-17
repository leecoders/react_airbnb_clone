const models = require("../models");

const createUser = (id, password, name, res) => {
  models.User.create({
    userId: id,
    userPassword: password,
    userName: name
  })
    .then(result => {
      res.json({ message: "success" });
    })
    .catch(err => {
      res.json({ message: "failure" });
    });
};

const signin = (id, password, res) => {
  models.User.findOne({
    where: { userId: id, userPassword: password }
  })
    .then(result => {
      res.json({ message: "success", data: result.userId });
    })
    .catch(err => {
      res.json({ message: "failure" });
    });
};

module.exports = {
  createUser,
  signin
};
