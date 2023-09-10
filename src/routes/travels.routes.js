import { Router } from "express"
import { registerTravel } from "../controllers/travels.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { travelSchema } from "../schemas/travelSchema.js"

const travelsRouter = Router()

//cadastra uma viagem
travelsRouter.post("/travels", validateSchema(travelSchema), registerTravel)

export default travelsRouter