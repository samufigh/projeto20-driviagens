export function notFoundCities(){
    return { 
        type: "notFoundCities", 
        message: `Insira o "id" de cidades existentes.`
    }
}
export function notFoundPassenger(){
    return { 
        type: "notFoundPassenger", 
        message: `Insira o "id" de um passageiro existente.`
    }
}

export function notFoundFlight(){
    return { 
        type: "notFoundFlight", 
        message: `Insira o "id" de voo existente.`
    }
}