import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: [true, "O título do livro é obrigatório"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true,"O autor é obrigatório"]},
    editora: {type: String, required: [true, "A editora do livro é obrigatório"]},
    numeroPaginas: {type: Number, min: [1, "O número minimo de página é 1"], max: [10000, "O número máximo de página é 10.000"] }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;