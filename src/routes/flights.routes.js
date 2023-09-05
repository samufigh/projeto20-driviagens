import { Router } from "express"
import { registerFlight, showFlights } from "../controllers/flights.controller.js"

const flightsRouter = Router()

//cadastra um vôo
flightsRouter.post("/flights", registerFlight)
//exibe os vôos cadastrados
flightsRouter.get("/flights", showFlights)

export default flightsRouter