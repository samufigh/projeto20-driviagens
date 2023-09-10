import Joi from "joi"

export const travelSchema = Joi.object({
    passengerId: Joi.number().integer().required().messages({
        'any.required': 'O campo passengerId é obrigatório',
        'number.base': 'O campo passengerId deve ser um número inteiro',
    }),
    flightId: Joi.number().integer().required().messages({
        'any.required': 'O campo flightId é obrigatório',
        'number.base': 'O campo flightId deve ser um número inteiro',
    })
});
