export function conflictError(city){
    return{
        type: "conflict",
        message: `A cidade ${city} já está cadastrada!`
    }
}