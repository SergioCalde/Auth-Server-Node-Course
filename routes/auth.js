const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
router.post( '/new',
[
    check('email', 'El email es obligatorio').isEmail(),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password no cumple los requisitos').isLength({ min: 6 }),
    
],crearUsuario );

// Login de usuario
router.post( '/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password no cumple los requisitos').isLength({ min: 6 }),
] ,loginUsuario );

// Validar y revalidar token
router.get( '/renew', revalidarToken);



module.exports = router;