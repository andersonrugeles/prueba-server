const express= require('express');
const router= express.Router();
const usuariosController = require('../../Controllers/userController');


router.get('/index', async (req,res)=>{
    const usuarios = await usuariosController.show();
    res.render('index/inicio',{usuarios});
});

module.exports=router;