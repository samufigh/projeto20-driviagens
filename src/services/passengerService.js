import { passengerRepository } from "../repositories/passengerRepository.js"

function createPassenger(body){
    return passengerRepository.createPassenger( body )
}

function selectPassengerTravels(name){
    
    return //passengerRepository.createPassenger( body )
}

export const passengerService  = { createPassenger, selectPassengerTravels }