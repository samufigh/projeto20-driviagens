import { conflictCitiesError } from "../errors/conflict.js"
import { inconsistentDatesError, invalidDateError, invalidFormatDateError } from "../errors/invalidDate.js"
import { notFoundCities } from "../errors/notFound.js"
import { flightRepository } from "../repositories/flightRepository.js"
import dayjs from "dayjs"
import { convertDate, desconvertDate, formatDate } from "../utils/formatDate.js"
import { incompleteDatesError } from "../errors/incompleteData.js"

async function createFlight({origin, destination, date}){
    
    const todayDate = dayjs().format('DD-MM-YYYY');
    const currentDate = convertDate(todayDate);
    const requestedDate = convertDate(date);

    if (requestedDate <= currentDate) throw invalidDateError(todayDate)    

    if (origin === destination) throw conflictCitiesError()

    const existingCities =  await flightRepository.findCities(origin, destination)
    if(existingCities.rowCount <= 1) throw notFoundCities()

    return flightRepository.createFlight( origin, destination, date )
}

async function selectFlights(origin, destination, biggerDate, smallerDate){

    if (origin && !destination && !biggerDate && !smallerDate){
        const flights = await flightRepository.selectFlightsByOrigin(origin)
        return flights.rows
    } 
    if (!origin && destination && !biggerDate && !smallerDate){
        const flights = await flightRepository.selectFlightsByDestinaion(destination)
        return flights.rows
    }
    if ((!biggerDate && smallerDate) || (biggerDate && !smallerDate)) throw incompleteDatesError()

    if (biggerDate && smallerDate){
        const isFormattedBiggerDate = formatDate(biggerDate);
        const isFormattedSmallerDate = formatDate(smallerDate);
        
        if(!isFormattedBiggerDate || !isFormattedSmallerDate) throw invalidFormatDateError()

        const biggerDateDesconverted = desconvertDate(biggerDate)
        const smallerDateDesconverted = desconvertDate(smallerDate)

        if(smallerDateDesconverted > biggerDateDesconverted) throw inconsistentDatesError()
    }

    if (!origin && !destination && biggerDate && smallerDate){
        
        const flights = await flightRepository.selectFlightsByDate(biggerDate, smallerDate)
        return flights.rows
    }

    if (origin && destination && biggerDate && smallerDate){
        
        const flights = await flightRepository.selectFlightsByOriginDestinationAndDate(origin, destination, smallerDate, biggerDate)
        return flights.rows
    }

    if (!origin && !destination && !biggerDate && !smallerDate){
        const flights = await flightRepository.selectFlights()
        return flights.rows
    }
}

export const flightService  = { createFlight, selectFlights }