export function invalidDateError(date){
    return{
        type: "invalidDate",
        message: `A data do voo deve ser posterior a data atual (${date}).`
    }
}