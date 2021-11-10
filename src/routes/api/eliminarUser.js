const express= require('express');
const router= express.Router();
const usuariosController = require('../../Controllers/userController');

router.post('/delete/:idusuarios', async (req,res)=>{
    const {idusuarios}=req.params;
    const data={idusuarios};
    const usuarios = await usuariosController.eliminar(data);
    console.log('El usuario ha sido eliminado');

    res.redirect('/index');
});


module.exports=router;