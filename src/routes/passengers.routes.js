import { Router } from "express"
import { showPassengerTravels } from "../controllers/passengers.controller"

const passengersRouter = Router()

//cadastra uma cidade
passengersRouter.get("/passengers/travels", showPassengerTravels)

export default passengersRouter