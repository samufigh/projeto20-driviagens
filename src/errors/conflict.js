export function conflictCitytError(city){
    return{
        type: "conflictCity",
        message: `A cidade ${city} já está cadastrada!`
    }
}

export function conflictCitiesError(city){
    return{
        type: "conflictCities",
        message: `As cidades de origem e de destino devem ter "id" diferentes.`
    }
}