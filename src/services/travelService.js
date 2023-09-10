import { notFoundFlight, notFoundPassenger } from "../errors/notFound.js"
import { travelRepository } from "../repositories/travelRepository.js"

async function createTravel({passengerId, flightId}){
    //console.log(passengerId, flightId)

    const existingPassenger = await travelRepository.findPassenger(passengerId)
    const existingFlight = await travelRepository.findFlight(flightId)
    
    if (existingPassenger.rowCount === 0) throw notFoundPassenger()
    if (existingFlight.rowCount === 0) throw notFoundFlight()

    return travelRepository.createTravel( passengerId, flightId )
}

export const travelService  = { createTravel }