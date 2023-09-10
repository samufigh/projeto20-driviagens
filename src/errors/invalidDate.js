export function invalidDateError(date){
    return{
        type: "invalidDate",
        message: `A data do voo deve ser posterior à data atual (${date}).`
    }
}

export function invalidFormatDateError(date){
    return{
        type: "invalidFormatDate",
        message: "As datas devem estar no formato DD-MM-AAAA."
    }
}