import { Router } from "express"
import { registerFlight, showFlights } from "../controllers/flights.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { flightSchema } from "../schemas/flightSchema.js"

const flightsRouter = Router()

//cadastra um vôo
flightsRouter.post("/flights", validateSchema(flightSchema), registerFlight)
//exibe os vôos cadastrados
flightsRouter.get("/flights", showFlights)

export default flightsRouter