import ErroBase from "../erros/ErroBase.js";

class NaoEncontrado extends ErroBase{
    constructor(mensagem){
        super(mensagem, 404);
    }
}

export default NaoEncontrado; 