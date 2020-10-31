import * as express from 'express';

const routes = express.Router();

const {cadastroUsuario, loginUsuario} = require(__dirname + '/controllers/usuariosController.js')
const adicionaPostagem = require(__dirname + '/controllers/postagemController.js')
const loginVerify = require(__dirname+ "/middleware/login")


routes.post("/cadastro",cadastroUsuario)
routes.post("/login", loginUsuario)

routes.post("/postMensagem",loginVerify,adicionaPostagem)

export default routes;