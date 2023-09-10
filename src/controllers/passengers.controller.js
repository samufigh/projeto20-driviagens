import httpStatus from "http-status"
import { passengerService } from "../services/passengerService.js"
import { incompleteDataError } from "../errors/incompleteData.js"

export async function registerPassenger(req, res) {

  if (!req.body) throw incompleteDataError()
  await passengerService.createPassenger(req.body)
  res.sendStatus(httpStatus.CREATED)
}

export async function showPassengerTravels(req, res) {
  const { name } = req.query;

  if (!req.body) throw incompleteDataError()
  const travels = await passengerService.selectPassengerTravels(name)
  res.status(200).send(travels)
    
}