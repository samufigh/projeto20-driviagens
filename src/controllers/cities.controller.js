import httpStatus from "http-status";
import { cityService } from "../services/cityService.js";

export async function registerCity(req, res) {
  if (!req.body) throw incompleteDataError()
  await cityService.createCity( req.body )
  res.status(201).sendStatus(httpStatus.CREATED)
}