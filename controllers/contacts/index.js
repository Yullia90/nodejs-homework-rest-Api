const { ctrlWrapper } = require("../../helpers");

const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addContacts = require("./addContacts");
const deleteContactById = require("./deleteContactById");
const updateContact = require("./updateContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addContacts: ctrlWrapper(addContacts),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};