import { db } from "../database/database.connection.js"

async function findPassenger(passengerId) {
    return db.query(`
        SELECT * FROM passengers 
        WHERE "id" = $1;`,
        [passengerId])
}

async function findFlight(flightId) {
    return db.query(`
        SELECT * FROM flights 
        WHERE "id" = $1;`,
        [flightId])
}

async function createTravel(passengerId, flightId){
    return db.query(`
        INSERT INTO travels 
        ("passengerId", "flightId") 
        VALUES 
        ($1, $2);`, [passengerId, flightId]
    );
}

export const travelRepository = { createTravel, findFlight, findPassenger }