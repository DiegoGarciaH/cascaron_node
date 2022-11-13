const { response } = require("express");
const super_user = require("../models/usuario");

const getUsers = async (req = request, res) => {
  const usuario = await super_user.findAll();

  res.json({ usuario });
};

const getUser = async (req = request, res) => {
  const { id } = req.params;

  const usuario = await super_user.findByPk(id);

  if (!usuario) {
    res.status(404).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  } else {
    res.json({ usuario });
  }
};

const putUsers = async (req, res = response) => {
  const { id } = req.params
  const { body } = req;

  try {
    // Buscar si existe una matricula
    const usuario = await super_user.findByPk( id );
    if ( !usuario ){
      return res.status(404).json({
        msg: 'No existe un usuario con el id ' + id
      })
    }

    const existEmail = await super_user.findOne({
      where: {
        email: body.email
      }
    });

    if (existEmail) {
      return res.status(400).json({
        msg: 'Ya existe un usuario con el email ' + body.email
      })
    }

    await usuario.update( body );

    res.json( usuario )


  } catch (error) {

    console.log(error)
    res.status(500).json({
      msg: 'Hable con el administrador',
  });
  }
};

const postUser = async (req, res) => {
  const { body } = req;

  try {

    // Buscar si existe una matricula
    const existMatricula = await super_user.findOne({
      where: {
        matricula_su: body.matricula_su
      }
    });

    const existEmail = await super_user.findOne({
      where: {
        email: body.email
      }
    });

    // validar que no exista una matricula
    if (existMatricula) {
      return res.status(400).json({
        msg: 'Ya existe un usuario con la matricula ' + body.matricula_su
      })
    }
    if (existEmail) {
      return res.status(400).json({
        msg: 'Ya existe un usuario con el email ' + body.email
      })
    }

    const usuario = new super_user(body);
    await usuario.save();

    res.json(usuario)


  } catch (error) {

    console.log(error)
    res.status(500).json({
      msg: 'Hable con el administrador',
  })
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const usuario = await super_user.findByPk( id );
  if (!usuario) {
    return res.status(404).json({
      msg: 'No existe un usuario con el id '+ id
    })
  }

  if(usuario.equals({estatus: false})){ // estado == 0
    await usuario.update({estatus: true}); 
  } 
  if(usuario.equalsOneOf({estatus: true})){ 
    await usuario.update({estatus: false});
  }


  // Eliminacion FISICA
  // await usuario.destroy();

  res.json(usuario)

};

module.exports = {
  getUsers,
  getUser,
  putUsers,
  postUser,
  deleteUser,
};
