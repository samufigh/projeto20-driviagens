import { conflictCitytError } from "../errors/conflict.js"
import { cityRepository } from "../repositories/cityRepository.js"

async function createCity( {name} ){
    const existingCity =  await cityRepository.findCity(name)
    if(existingCity.rowCount > 0) throw conflictCitytError(name)

    const city = await cityRepository.createCity(name)
    return city
} 

export const cityService = { createCity }