import { Router } from "express"
import { registerTravel } from "../controllers/travels.controller.js"

const travelsRouter = Router()

//cadastra uma viagem
travelsRouter.post("/travels", registerTravel)

export default travelsRouter