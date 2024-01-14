const { ctrlWrapper } = require("../../helpers");
const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
};
