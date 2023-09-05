import { Router } from "express"
import { registerCity } from "../controllers/cities.controller.js"

const citiesRouter = Router()

//cadastra uma cidade
citiesRouter.post("/cities", registerCity)

export default citiesRouter


