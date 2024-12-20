import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
    constructor(mensagem = "Dados estão incorretos"){
        super(mensagem, 400);
    }
}

export default RequisicaoIncorreta;