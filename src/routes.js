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

const aoba = [
  {
    id: 1,
    nome: "Giovannipantuzzo",
  },
  {
    id: 2,
    nome: "Gabriel",
  },
];

//rec - requisição // res - resposta a requisição

routes.get("/user", (req, res) => {
  const query = req.query;
  console.log(query);
  res.status(200).json(aoba);
});

routes.post("/user", (req, res) => {
  const newUser = req.body;
  aoba.push(newUser);
  res.status(200).json({ message: "Sucess" });
});

routes.put("/user/:userId", (req, res) => {
  const { userId } = req.params;
  const newFields = req.body;

  let selectedIndex;

  let selected = aoba.find((user, index) => {
    selectedIndex = index;
    return user.id === userId;
  });
  selected = { ...selected, ...newFields };

  aoba[selectedIndex] = selected;

  res.status(200).json({ message: "Sucess" });
});

module.exports = routes;
