import { passengerRepository } from "../repositories/passengerRepository.js"

function createPassenger(body){
    return passengerRepository.createPassenger( body )
}

async function selectPassengerTravels(name){

    if (!name){
        const travels = await passengerRepository.selectPassengerTravels()
        console.log(travels.rows)
        return travels.rows
    } else {
        const travels = await passengerRepository.selectPassengerTravelsbyName(name)
        console.log(travels.rows)
        return travels.rows
    }
}

export const passengerService  = { createPassenger, selectPassengerTravels }