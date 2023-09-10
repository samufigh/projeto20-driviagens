import { db } from "../database/database.connection.js"

async function findCities(origin, destination) {
    return db.query(`
        SELECT * FROM cities 
        WHERE "id" = $1 OR "id" = $2;`,
        [origin, destination])
}

async function createFlight(origin, destination, date) {
    return db.query(`
        INSERT INTO flights 
        (origin, destination, date)
        VALUES 
        ($1, $2, $3);`,
        [origin, destination, date])
}

async function selectFlightsByOrigin(origin) {
    return db.query(`
        SELECT flights."id" AS "id", 
            origin_cities."name" AS "origin", 
            destination_cities."name" AS "destination", 
            flights."date", TO_CHAR(flights."date", 'DD-MM-YYYY') AS "date" 
        FROM flights
        JOIN cities AS origin_cities ON origin_cities.id = flights.origin
        JOIN cities AS destination_cities ON destination_cities.id = flights.destination
        WHERE origin_cities."name" = $1;
        `, [origin]);
  }

  async function selectFlightsByDestinaion(destination) {
    return db.query(`
        SELECT flights."id" AS "id", 
            origin_cities."name" AS "origin", 
            destination_cities."name" AS "destination", 
            flights."date", TO_CHAR(flights."date", 'DD-MM-YYYY') AS "date" 
        FROM flights
        JOIN cities AS origin_cities ON origin_cities.id = flights.origin
        JOIN cities AS destination_cities ON destination_cities.id = flights.destination
        WHERE destination_cities."name" = $1;
        `, [destination]);
  }

  async function selectFlightsByDate(biggerDate, smallerDate) {
    return db.query(`
      SELECT flights."id" AS "id", 
          origin_cities."name" AS "origin", 
          destination_cities."name" AS "destination", 
          flights."date", TO_CHAR(flights."date", 'DD-MM-YYYY') AS "formatted_date" 
      FROM flights
      JOIN cities AS origin_cities ON origin_cities.id = flights.origin
      JOIN cities AS destination_cities ON destination_cities.id = flights.destination
      WHERE flights."date" BETWEEN $1 AND $2;
      `, [smallerDate, biggerDate]);
  }
  

export const flightRepository = { findCities, createFlight, selectFlightsByOrigin, selectFlightsByDestinaion, selectFlightsByDate }