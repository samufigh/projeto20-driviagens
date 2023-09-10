import { invalidSchema } from "../errors/invalidSchema.js"

export function validateSchema(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            throw invalidSchema(errors)
        }
        next()
    }
}