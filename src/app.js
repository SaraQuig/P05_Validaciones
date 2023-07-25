const express=require('express')
const app=express()
app.use(express.json())
// const userRoutes = require('./routes/user');
const userRoutes = require('../src/routes/user');
app.use(express.json());
//rutas
app.use('/users', userRoutes);
app.listen (3000)
console.log ('Server corriendo en el Puerto 3000')

module.exports = app