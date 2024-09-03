let proxId = 1;

const model = (body, id = proxId++) => {
    
    if(
        body.nome != undefined &&
        body.matricula != undefined &&
        body.curso != undefined &&
        body.anoE <= 2024 
    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            anoEstudante: body.anoE
        }
    }
}

module.exports = model