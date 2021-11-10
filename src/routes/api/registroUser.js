const express= require('express');
const router= express.Router();
const usuariosController = require('../../Controllers/userController');

router.post('/add_user', async (req,res)=>{
    const cantidad=await usuariosController.validarCantidad();
    const numero=cantidad[0].cantidad;
    if(numero<3){
        const usuarios = await usuariosController.create(req.body);
        console.log('registro exitoso');
        res.redirect('/index');
    }else{
        console.log('Registro total de 3 usuarios');
        res.redirect('/index');
    }
    
});


module.exports=router;