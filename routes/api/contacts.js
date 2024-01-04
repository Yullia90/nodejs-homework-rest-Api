const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const {schemas} = require("../../models/Contact");

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

// router.delete("/:contactId", ctrl.deleteById);

// router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;
