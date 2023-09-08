import { Router } from "express"
import { registerCity } from "../controllers/cities.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { citySchema } from "../schemas/citySchema.js"

const citiesRouter = Router()

//cadastra uma cidade
citiesRouter.post("/cities", validateSchema(citySchema), registerCity)

export default citiesRouter


