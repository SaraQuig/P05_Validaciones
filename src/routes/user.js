const express = require('express');
const router = express.Router();

// Ruta para devolver todos los usuarios
router.get('/', (req, res) => {
    // Lógica para devolver todos los usuarios
    return res.json('Devolver todos los usuarios');
});

// Ruta para devolver un usuario por id
router.get('/:id', (req, res) => {
    if (req.params.id === 'U001') {
        return res.json('Usuario 001 correcto');
    }
    return res.status(404).json('Usuario no encontrado');
    //   const userId = req.params.id;
    //   // Lógica para devolver un usuario por id
    //   return res.json(`Devolver usuario con id ${userId}`);
});

// Ruta para crear un nuevo usuario
router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        return res.status(201).json('Usuario creado');
    }
    res.json(400).json('Usuario no creado');
    // Lógica para crear un nuevo usuario
    //   return res.json('Crear un nuevo usuario');
});

module.exports = router;
