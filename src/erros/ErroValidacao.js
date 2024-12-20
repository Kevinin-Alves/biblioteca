import RequisicaoIncorreta from "./RequisicaoIncorreta.js";


class ErroValidacao extends RequisicaoIncorreta{
    constructor(erro){
        const menssagensErro = Object.values(erro.errors).map(erro => erro.message).join("");

        super(`Erro de validação: ${menssagensErro}`);
    }
}

export default ErroValidacao;