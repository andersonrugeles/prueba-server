 const pool = require('../database');
 const express = require('express');
 const router= express.Router();

 module.exports = function () {
 async function createUser(data){
    let query= "insert into usuarios set ?";
    await pool.query(query,[data]);
    return "Creado Exitosamente";
 }

 async function validaUser(data){
     const validar = await pool.query("select * from usuarios where email=? and idusuarios=?",[data.email,data.idusuarios]);
     return validar;
}
async function show(){
         let consulta = "select * from usuarios";
         const data = await pool.query(consulta);
         return data;
}
async function validarCantidadUser(data){
    let query=await pool.query('SELECT COUNT(idusuarios) As cantidad FROM usuarios');
    return query;
}
async function actualizarUser(data) {
   let query = 'UPDATE usuarios SET email=?, modificado=? WHERE idusuarios=?';
   await pool.query(query,
       [
           data.email,
           data.modificado,
           data.idusuarios,
           
       ]
    
   )};

   async function eliminarUser(data) {
      let query = 'delete from usuarios where idusuarios = ?';
      await pool.query(query,
          [
              data.idusuarios,
          ],
      );
  }
  
      return {
         createUser,
         validaUser,
         show,
         actualizarUser,
         eliminarUser,
         validarCantidadUser
     }
    }