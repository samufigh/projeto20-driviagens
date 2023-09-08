import joi from "joi"

export const passengerSchema = joi.object({
  firstName: joi.string().min(2).max(100).required().messages({
      'string.min': 'O primeiro nome deve ter no mínimo {#limit} caracteres',
      'string.max': 'O primeiro nome não pode ter mais de {#limit} caracteres',
      'any.required': 'O primeiro nome é obrigatório',
    }),
	lastName: joi.string().min(2).max(100).required().messages({
        'string.min': 'O último nome deve ter no mínimo {#limit} caracteres',
        'string.max': 'O último nome não pode ter mais de {#limit} caracteres',
        'any.required': 'O último nome é obrigatório',
      }),
  });