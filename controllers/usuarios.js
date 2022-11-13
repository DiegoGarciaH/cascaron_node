const { response } =require('express')

const usuarioGet = (req = request, res) => {

    const { q, nombre = 'No name', apikey } = req.query;


    res.json({
        msg: 'get API  - controlador',
        q,
        nombre,
        apikey
    })
  }

const usuariosPut = (req, res = response) => {

    const id = req.params.id;


    res.status(400).json({
        msg: 'put API  - controlador',
        id
    })
  }

const usuariosPost =   (req, res) => {
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API  - controlador',
        nombre, edad
    })
  }

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API  - controlador'
    })
  }

const usuariosPacth = (req, res) => {
    res.json({
        msg: 'patch API  - controlador'
    })
  }



module.exports = { 
    usuarioGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete, 
    usuariosPacth
}

