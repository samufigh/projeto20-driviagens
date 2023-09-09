import joi from "joi"

export const flightSchema = joi.object({
    origin: joi.number().integer().required(),
    destination: joi.number().integer().required(),
    date: joi.string().pattern(new RegExp(/^\d{2}-\d{2}-\d{4}$/)).required().messages({
        'string.pattern.base': 'A data deve estar no formato DD-MM-AAAA',
        'any.required': 'Este campo é obrigatório',
      })
})