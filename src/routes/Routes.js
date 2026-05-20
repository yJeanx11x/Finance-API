const express=require('express');
const appRoutes=express.Router();

appRoutes.get('/criar',(req,res)=>{
    return res.status(200).json({message:'Deu Bom'})
})

module.exports=appRoutes