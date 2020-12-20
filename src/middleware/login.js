const jwt = require('jsonwebtoken')

function verificaSessao(req, res, next){
    try{
        const token = req.cookies.token
        const decode = jwt.verify(token, process.env.JWT_PUBLIC_KEY)
        req.body.usuario = decode
        next()
    }catch(err){
        return res.status(401).json({mensagem: "Falha na autenticação"})
    }
}
module.exports = verificaSessao;