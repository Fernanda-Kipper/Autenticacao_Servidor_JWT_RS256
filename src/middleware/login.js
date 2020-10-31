const jwt = require('jsonwebtoken')

/// a secret key precisa ser uma variável de ambiente depois

function loginVerify(req, res, next){
    const token = req.headers.authorization.split(' ')[1]
    try{
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        req.body.usuario = decode
        next()
    }catch(err){
        return res.status(401).send({mensagem: "Falha na autenticação"})
    }
}

module.exports = loginVerify