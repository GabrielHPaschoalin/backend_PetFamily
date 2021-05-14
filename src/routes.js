/*
GET: buscar informações do backend, como listas.
POST: Criar informações no backend, como o cadastro.
PUT: Modificar informações, como alterar o endereço.
DELETE: Deletar informações, como excluír usuário.

netstat -ano | findstr :<PORT>

requisição: Retorna um status:
200 - Deu tudo certo
400 - Erro do cliente
500 - Erro de servidor
*/

const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

//User
routes.get("/user/:user_id", UserController.getById);
routes.post("/user", UserController.create);
routes.put("/user/:user_id", UserController.update);
routes.delete("/user/:user_id", UserController.delete);

module.exports = routes;
