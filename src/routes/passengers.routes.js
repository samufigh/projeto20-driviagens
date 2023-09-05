import { Router } from "express"
import { registerPassenger, showPassengerTravels } from "../controllers/passengers.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { passengerSchema } from "../schemas/passengerSchemas.js"

const passengersRouter = Router()

//cadastra um passageiro
passengersRouter.post("/passengers", validateSchema(passengerSchema), registerPassenger)
//cadastra uma cidade
passengersRouter.get("/passengers/travels", showPassengerTravels)

export default passengersRouter