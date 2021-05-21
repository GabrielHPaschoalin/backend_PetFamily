const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      number: Joi.string().required(),
    }),
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
  }),

  getById: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),

    [Segments.BODY]: Joi.object()
      .keys({
        username: Joi.string().optional(),
        number: Joi.string().optional(),
        cpf: Joi.string().optional(),
      })
      .min(1),
  }),

  delete: celebrate({
    [Segments.BODY]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
};
