const db = require(__dirname +'/../database/db.ts')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const signOptions = {
    algorithm: 'RS256',
    expiresIn: '1h'
}  // Sistema de criptografia que utiliza uma chave pública e privada


async function loginUsuario(req, res){
    try{
        const user_found = await db('users').select('*').where('users.email', '=', req.body.email);
        bcrypt.compare(req.body.password, user_found[0].password, (err, results)=>{
            if (err){
                console.log(err)
                return res.status(401).send({mensagem:'Email ou senha incorretos'})
            }
            if (results){
                const token = jwt.sign({
                    id_usuario: user_found[0].id,
                    email: user_found[0].email
                }, 
                process.env.JWT_PRIVATE_KEY,
                signOptions
                )
                return res.status(200).cookie('token', token, {
                    httpOnly: true,
                    maxAge: 30 * 60 * 10000
                }).send({mensagem:'Logado com sucesso'})
            }
            return res.status(200).send({mensagem:'Email ou senha incorretos'})
        })
    }catch(err){
        console.log(err)
        return res.status(401).send({mensagem:'Email ou senha incorretos'})
    }
}

async function cadastroUsuario(req, res){
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password, 10)
    try{
        await db('users').insert({
            email,
            password});
        return res.status(201).json({sucesso: "Cadastro realizado com sucesso, realize login"});
    }catch (err){
        console.log(err)
        if (err.toString().includes('UNIQUE')){
            return res.status(400).json({
                erro : "Usuário já cadastrado"
            });
        }
        else{
            return res.status(400).json({
                erro : "Erro ao cadastrar usuário no db"
            });
        }
         }
};

module.exports = {cadastroUsuario, loginUsuario};

