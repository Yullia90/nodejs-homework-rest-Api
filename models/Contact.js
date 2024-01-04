const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers/handleMongooseError");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

contactSchema.pre("findOneAndUpdate", function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
  
});

contactSchema.post("findOneAndUpdate", handleMongooseError);

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required().messages({ "any.required": `"name" must be exist` }),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  favorite:Joi.boolean()
});

const updateFavoriteScheme = Joi.object({
  favorite:Joi.boolean().required(),
})

const schemas = { addSchema, updateFavoriteScheme, };

module.exports = { Contact, schemas };