import httpStatus from "http-status"
import { flightService } from "../services/flightService.js"

export async function registerFlight(req, res) {
    if (!req.body) throw incompleteDataError()
    await flightService.createFlight(req.body)
    res.sendStatus(httpStatus.CREATED)
}

export async function showFlights(req, res) {
  try {
    await //
      res.status(200).send("showFlights")
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}