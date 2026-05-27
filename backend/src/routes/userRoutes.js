const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// definimos que cuando alguien entre a "/usuarios", use la funcion de tu controlador
router.get('/', userController.getAllUser);
//Ruta para crear un nuevo usuario
router.post('/', userController.createUser);
//Ruta para el login
router.post('/login', userController.loginUser);
<<<<<<< HEAD
router.post('/recuperar-contrasena', userController.recuperarContrasena);
router.post('/validar-codigo', userController.validarCodigoRecuperacion);
=======
//Ruta para recuperar contraseña
router.post('/recuperar-contrasena', userController.recuperarContrasena);
//Ruta para validar el código de recuperación
router.post('/validar-codigo', userController.validarCodigoRecuperacion);
//Ruta para cambiar contraseña
router.put('/cambiar-contrasena', userController.cambiarContrasena);
>>>>>>> f3235ec815f1d6aafd5629105a52f228ee52fa6c
// ruta para actualizar un usuario
router.put('/:id', userController.updateUser);
// ruta para eliminar un usuario
router.delete('/:id', userController.deleteUser);
module.exports = router;