import joi from "joi"

export const citySchema = joi.object({
    name: joi.string().min(2).max(50).required().messages({
        'string.min': 'O nome da cidade deve ter no mínimo {#limit} caracteres',
        'string.max': 'O nome da cidade não pode ter mais de {#limit} caracteres',
        'any.required': 'O nome da cidade é obrigatório',
      })
    })