function middlewareErroGlobal(erro, req, res, next) {

    return res.status(500).json({ message: 'Erro no servidor' })

}
module.exports = middlewareErroGlobal