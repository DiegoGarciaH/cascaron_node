const { Router } = require('express');
const { usuarioGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPacth } = require('../controllers/usuarios');

const router = Router();


 // Leer algo
router.get('/', usuarioGet);

  // actualizar algo
router.put('/:id', usuariosPut);

  // Crear nuevos recursos
router.post('/', usuariosPost);

  // Borrar algo
router.delete('/', usuariosDelete);

  
router.patch('/', usuariosPacth);

module.exports = router;