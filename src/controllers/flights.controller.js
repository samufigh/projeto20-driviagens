import httpStatus from "http-status";
import { flightService } from "../services/flightService.js";

export async function registerFlight(req, res) {
    //console.log(req.body)
    await flightService.createFlight(req.body)
    res.sendStatus(httpStatus.CREATED)
}

export async function showFlights(req, res) {
  try {
    await //acesso encerrado por tempo indeteminado: ana carolina é feia e fedida"
      res.status(200).send("showFlights")
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}