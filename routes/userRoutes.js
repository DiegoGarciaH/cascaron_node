const { Router } = require('express');
const { getUsers, getUser, putUsers, postUser, deleteUser } = require('../controllers/userControllers');

const router = Router();


 // Leer algo
router.get('/', getUsers);

// Leer algo con id en especifico
router.get('/:id', getUser);

// Actualizar algo
router.put('/:id', putUsers);

// Crear nuevos recursos
router.post('/', postUser);

// Borrar algo
router.delete('/:id', deleteUser);

module.exports = router;