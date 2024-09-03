const estudante_controller = require("../controllers/estudante_controller.js")
const livro_controller = require("../controllers/livro_controller.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.dataA != undefined &&
        body.dataD != undefined &&
        body.dataA < body.dataD &&
        estudante_controller.show(body.estudante_id) &&
        livro_controller.show(body.livro_id)
    ) {
        return {
            id,
            aluguel: body.dataA,
            devolucao: body.dataD,
            aluno: body.estudante_id,
            livro: body.livro_id,
        }
    }
}

module.exports = model