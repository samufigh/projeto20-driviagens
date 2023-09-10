import httpStatus from "http-status"
import { flightService } from "../services/flightService.js"

export async function registerFlight(req, res) {
  if (!req.body) throw incompleteDataError()
  await flightService.createFlight(req.body)
  res.sendStatus(httpStatus.CREATED)
}

export async function showFlights(req, res) {
  const { origin, destination} = req.query
  const smallerDate = req.query['smaller-date'];
  const biggerDate = req.query['bigger-date'];

  const flights = await flightService.selectFlights(origin, destination, biggerDate, smallerDate)
  res.status(200).send(flights)
}