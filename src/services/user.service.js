const { save, User,getAllUsers } = require("../models/user.model");
const addNewUser = (name, lastname, email) => {
  const newUser = new User(name, lastname, email);
  return save(newUser);
};

const getUsers = () => {
  return getAllUsers();
};

module.exports = {
  addNewUser,
  getUsers
};



