export function invalidDateError(date){
    return{
        type: "invalidDate",
        message: `A data do voo deve ser posterior à data atual (${date}).`
    }
}