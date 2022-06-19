module.exports = (app) => {
    var ContatosController = {
        index: (req, res) => {
            var usuario = req.session.usuario;
            console.log("user []: " + usuario.contatos[0]);
            contatos = usuario.contatos;
            params = {
                usuario: usuario
                , contatos: contatos
            };
            res.render('contatos/index', params);
        },
        create: (req, res) => {
            console.log("create", req.body.contato['nome']);
            var contato = req.body.contato;
            var usuario = req.session.usuario;
            usuario.contatos.push(contato);
            res.redirect('/contatos');
        },
        show: (req, res) => {
            var id = req.params.id;
            var usuario = req.session.usuario.contatos[id];
            params = { contato: contato, id: id };
            res.render('contatos/edit', params);
        },
        edit: (req, res) => {
            var id = req.params.id;
            var usuario = req.session.usuario;
            contato = usuario.contatos[id];
            params = {
                usuario: usuario
                , contato: contato
                , id: id
            };
            res.render('contatos/edit', params);
        },
        update: (req, res) => {
            var contato = req.body.contato
                , usuario = req.session.usuario;
            usuario.contatos[req.params.id] = contato;
            res.redirect('contatos');
        },
        destroy: (req, res) => {
            var usuario = req.session.usuario
                , id = req.params.id;
            usuario.contatos.splice(id, 1);
            res.redirect('contatos');
        }
    };
    return ContatosController;
}