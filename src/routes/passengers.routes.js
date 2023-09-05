import { Router } from "express"
import { registerPassenger, showPassengerTravels } from "../controllers/passengers.controller.js"

const passengersRouter = Router()

//cadastra um passageiro
passengersRouter.post("/passengers", registerPassenger)
//cadastra uma cidade
passengersRouter.get("/passengers/travels", showPassengerTravels)

export default passengersRouter