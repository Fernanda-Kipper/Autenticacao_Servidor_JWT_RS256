import * as express from 'express';

const routes = express.Router();

const {cadastroUsuario, loginUsuario} = require(__dirname + '/controllers/usuariosController.js')
const adicionaPostagem = require(__dirname + '/controllers/postagemController.js')
const  verificaSessao = require(__dirname+ "/middleware/login")


routes.post("/user/signin",cadastroUsuario)
routes.post("/user/login", loginUsuario)

routes.post("/user/publicar",verificaSessao,adicionaPostagem)

export default routes;