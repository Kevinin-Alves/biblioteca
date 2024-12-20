import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ menssage: "Dados incorretos" });
    } else if (erro instanceof mongoose.Error.ValidationError) {
        const menssageErro = Object.values(erro.errors).map(erro => erro.message).join("");
        res.status(400).send({menssage: "Erro de validação"});
    } else {
        res.status(500).send({ message: "Erro de servidor!" });
    }
}

export default manipuladorDeErros;