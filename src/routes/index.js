import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"
import pedidos from "./pedidosRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Biblioteca"})
  })

  app.use(
    express.json(),
    livros,
    autores,
    pedidos
  )
}

export default routes;