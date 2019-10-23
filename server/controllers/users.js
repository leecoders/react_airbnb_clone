const models = require("../models");
const jwt = require("jsonwebtoken");
const secretObj = require("../config/jwt.js");

const createToken = id => {
  return jwt.sign({ userId: id }, secretObj.secret, {
    algorithm: "HS256",
    expiresIn: 60 * 60 * 24 * 7
  });
};

const createUser = (id, password, name, res) => {
  models.User.create({
    userId: id,
    userPassword: password,
    userName: name
  })
    .then(result => {
      const token = createToken(id);
      res.cookie("user", token, {
        expires: new Date(Date.now() + 9999999),
        httpOnly: true
      });
      res.json({ message: "success", data: { userId: id } });
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
      const token = createToken(id);
      res.cookie("user", token, {
        expires: new Date(Date.now() + 9999999),
        httpOnly: true
      });
      res.json({ message: "success", data: { userId: result.userId } });
    })
    .catch(err => {
      res.json({ message: "failure" });
    });
};

module.exports = {
  createUser,
  signin
};
