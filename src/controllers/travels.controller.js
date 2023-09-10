import httpStatus from "http-status"
import { travelService } from "../services/travelService.js"

export async function registerTravel(req, res) {
    if (!req.body) throw incompleteDataError()
    await travelService.createTravel(req.body)
    res.sendStatus(httpStatus.CREATED)
}