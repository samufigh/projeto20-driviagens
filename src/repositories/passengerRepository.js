import { db } from "../database/database.connection.js"

async function createPassenger(body) {
    const { firstName, lastName } = body

    return db.query(`
        INSERT INTO passengers 
        ("firstName", "lastName") 
        VALUES 
        ($1, $2);`, [firstName, lastName]
    );

}

async function selectPassengerTravels(){
    
    return db.query(`
        SELECT
            p."firstName" || ' ' || p."lastName" AS passenger,
            CAST(COUNT(t."passengerId") AS INTEGER) AS travels
        FROM
            passengers p
        LEFT JOIN
            travels t
        ON
            p.id = t."passengerId"
        GROUP BY
            passenger
        ORDER BY
            travels DESC
        LIMIT
            10;
    `)
}

async function selectPassengerTravelsbyName(name){
    
    return db.query(`
        SELECT
            p."firstName" || ' ' || p."lastName" AS passenger,
            CAST(COUNT(t."passengerId") AS INTEGER) AS travels
        FROM
            passengers p
        LEFT JOIN
            travels t
        ON
            p.id = t."passengerId"
        WHERE
            p."firstName" || ' ' || p."lastName" ILIKE $1
        GROUP BY
            passenger
        ORDER BY
            travels DESC
        LIMIT
        10;
    `, [`%${name}%`])
}

export const passengerRepository = { createPassenger, selectPassengerTravels, selectPassengerTravelsbyName }