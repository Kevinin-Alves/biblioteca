import NaoEncontrado from "../middlewares/NaoEncontrado.js";
import pedidos from "../models/Pedido.js";

class PedidoController {

  static listarPedidos = async (req, res, next) => {
    try {
      const pedidosResultado = await pedidos.find().populate("itens.livro","titulo").exec();

      res.status(200).json(pedidosResultado);

    } catch (erro) {
      next(erro);
    }
  }

  static listarPedidoPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const pedidoResultado = await pedidos.findById(id).populate("itens.livro","titulo").exec();

      if (pedidoResultado !== null) {
        res.status(200).send(pedidoResultado);
      } else {
        next(new NaoEncontrado("Id do Pedido não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarPedido = async (req, res, next) => {
    try {
      let pedido = new pedidos(req.body);

      const pedidoResultado = await pedido.save();

      res.status(201).send(pedidoResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  }

  static atualizarPedido = async (req, res, next) => {
    try {
      const id = req.params.id;

      const pedidoResultado = await pedidos.findByIdAndUpdate(id, { $set: req.body });

      if (pedidoResultado !== null) {
        res.status(200).send({ message: "Pedido atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Pedido não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static excluirPedido = async (req, res, next) => {
    try {
      const id = req.params.id;

      const pedidoResultado = await pedidos.findByIdAndDelete(id);

      if (pedidoResultado !== null) {
        res.status(200).send({ message: "Pedido removido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Pedido não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }
}

export default PedidoController;
