import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
    {
        id: { type: String },
        dataPedido: { type: Date, default: Date.now },
        cliente: { type: String, required: [true, "O nome do cliente é obrigatório"] },
        total: { type: Number, required: [true, "O total do pedido é obrigatório"] },
        itens: [
            {
                livro: { type: mongoose.Schema.Types.ObjectId, ref: 'livros', required: [true, "O livro é obrigatório"] },
                quantidade: { type: Number, required: [true, "A quantidade é obrigatória"] }
            }
        ]
    },
    {
        versionKey: false
    }
);

const pedidos = mongoose.model("pedidos", pedidoSchema);

export default pedidos;
