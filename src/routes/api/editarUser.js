
const express= require('express');
const router= express.Router();
const usuariosController = require('../../Controllers/userController');


router.post('/edit_user/:idusuarios/:modificado', async (req,res)=>{
    const {idusuarios,modificado}=req.params;
    const {email}=req.body;
    const validacion={email,idusuarios};
    const valida=await usuariosController.validacion(validacion);
     if(modificado==0){
        if(valida[0]==undefined){
            const modificado=1;
            const data={idusuarios,email,modificado};
            const usuarios = await usuariosController.update(data);
            console.log('El usuario ha sido actualizado');
            res.redirect('/index');
         
        }else{
            console.log('Debes modificarlo con otro email');
            res.redirect('/index');
        }
    
    }else{
        console.log('El usuario ya ha sido actualizado');
        res.redirect('/index');
    }
   
});


module.exports=router;