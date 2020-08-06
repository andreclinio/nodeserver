const Joi = require("@hapi/joi");

module.exports = Joi.object({
    name: Joi.string().min(3).max(300).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    timestamps: Joi.any().forbidden(),
});