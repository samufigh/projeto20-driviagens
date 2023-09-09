import { conflictCitiesError } from "../errors/conflict.js"
import { invalidDateError } from "../errors/invalidDate.js"
import { notFoundCities } from "../errors/notFound.js"
import { flightRepository } from "../repositories/flightRepository.js"
import dayjs from "dayjs"
import { convertDate } from "../utils/formatDate.js"

async function createFlight({origin, destination, date}){
    const todayDate = dayjs().format('DD-MM-YYYY')
    const currentDate = convertDate(todayDate)
    const requestedDate = convertDate(date)

    if (requestedDate <= currentDate) throw invalidDateError(todayDate)    

    if (origin === destination) throw conflictCitiesError()

    const existingCities =  await flightRepository.findCities(origin, destination)
    if(existingCities.rowCount <= 1) throw notFoundCities()

    return flightRepository.createFlight( origin, destination, date )
}

export const flightService  = { createFlight }