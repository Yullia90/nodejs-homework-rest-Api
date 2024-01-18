const { CtrlWrapper } = require("../../helpers");
const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register: CtrlWrapper(register),
  login: CtrlWrapper(login),
  getCurrent: CtrlWrapper(getCurrent),
  logout: CtrlWrapper(logout),
  updateSubscription: CtrlWrapper(updateSubscription),
  updateAvatar: CtrlWrapper(updateAvatar),
};
