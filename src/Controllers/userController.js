const model = require('../Models/userModel');
const express = require('express');

async function show(){
    const data = await model().show();
    return data;
}
async function validacion(req) {
 const data = await model().validaUser(req);
 return data;
    
}
async function create(req, res) {
    const data = req;
    const create_user = await model().createUser(data);
   
    return create_user ;
}
async function update(req, res, next) {    
    const data = req;
    const update = await model().actualizarUser(data);
    return update;
}

async function validarCantidad(req, res, next) {    
    const data = req;
    const update = await model().validarCantidadUser(data);
    return update;
}

async function eliminar(req, res , next) {
    const data = req;
    const borrar = await model().eliminarUser(data);
    return borrar;


}




module.exports = {
    show,
    validacion,
    create,
    update,
    eliminar,
    validarCantidad
    
}