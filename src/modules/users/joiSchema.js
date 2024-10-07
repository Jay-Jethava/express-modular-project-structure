const Joi = require("joi");

module.exports = {
  create: Joi.object().keys({
    id: Joi.number().allow(null),
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    gender: Joi.string().valid("Male", "Female", "Other"),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    deletedAt: Joi.date().allow(null),
  }),

  update: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    gender: Joi.string().valid("Male", "Female", "Other"),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    deletedAt: Joi.date().allow(null),
  }),
};
