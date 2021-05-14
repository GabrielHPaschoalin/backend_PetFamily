const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [segments.BODY]: Joi.object().keys({
      user_id: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      confirmPassword: Joi.ref("password"),
      number: Joi.string().required(),
    }),
  }),

  getById: celebrate({
    [segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),

  update: celebrate({
    [segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),

    [segments.BODY]: Joi.object()
      .keys({
        user_id: Joi.string().optional(),
        name: Joi.string().optional(),
        email: Joi.string().email().optional(),
        password: Joi.string().min(6).optional(),
        number: Joi.string().optional(),
      })
      .min(1),
  }),

  delete: celebrate({
    [segments.BODY]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
};
