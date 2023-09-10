import { passengerRepository } from "../repositories/passengerRepository.js"

function createPassenger(body){
    return passengerRepository.createPassenger( body )
}

async function selectPassengerTravels(name){

    if (!name){
        const travels = await passengerRepository.selectPassengerTravels()
        console.log(travels.rows)
        return travels.rows
    }
    return //passengerRepository.createPassenger( body )
}

export const passengerService  = { createPassenger, selectPassengerTravels }