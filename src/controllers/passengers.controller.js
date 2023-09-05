import httpStatus from "http-status";
import { passengerService } from "../services/passengerService.js";

export async function registerPassenger(req, res) {
  try {
    await passengerService.createPassenger(req.body)
    res.sendStatus(httpStatus.CREATED)
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function showPassengerTravels(req, res) {
    try {
      await //função
      res.status(200).send("showPassenger")
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
}