const Joi = require('@hapi/joi')

//register validation
export function registerValidation(data) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  })
  return schema.validate(data)
}

//login validation
export function loginValidation(data) {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  })
  return schema.validate(data)
}
