const db = require(__dirname +'/../database/db.ts')

async function adicionaPostagem(req, res){
    const{mensahgem,
         avaliacao} = req.body
    const email_user = req.body.usuario.email
    const id_user = req.body.usuario.id_usuario
    try{
        await db('posts').insert({
            mensahgem,
            avaliacao,
            email_user,
            id_user
        })
        return res.status(200).send('Post adicionado com sucesso')
    }catch(err){
        console.log(err)
        return res.status(401).send('Erro ao adicionar postagem')
    }
}

module.exports = adicionaPostagem