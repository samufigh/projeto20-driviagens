export function incompleteDataError(){
    return { 
        type: "notFound", 
        message: "Não foi possível identificar os dados!"
    }
}

export function incompleteDatesError(){
    return { 
        type: "unprocessableEntityDate", 
        message: "Os parâmetros bigger-date e smaller-date devem ser passados juntos."
    }
}