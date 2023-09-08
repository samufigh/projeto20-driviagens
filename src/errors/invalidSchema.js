export function invalidSchema(errors){
    return { 
        type: "unprocessableEntity", 
        message: errors[0]
    }
}