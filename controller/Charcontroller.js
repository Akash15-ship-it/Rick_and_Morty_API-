const Character=require("../models/Characters")
const express=require("express")
exports.addchar=async(req,res)=>{
    try{
      const character=await Character.create({
        id:req.body.id,
        name:req.body.name,
        status:req.body.status,
        species:req.body.species,
        gender:req.body.gender,
        origin:req.body.origin,
        location:req.body.location,
        episodes:req.body.episodes
      })
      res.status(200).json({
        message:"character add",
        data:character
      })
    }catch(err){
       res.status(405).json({
        message:err.message,
        err
       })
    }
}
exports.getall=async (req,res)=>{
    try{
const characters=await Character.find()
res.status(200).json({
    message:"data fetched",
    data:characters
})
    }catch(err){
        console.log(err)
    }
}
exports.getbyid=async (req,res)=>{
    try{
   const character=await Character.find({"id":req.params.id})
   res.status(200).json({
    data:character
   })
    }catch(err){
        console.log(err)
    }
}
exports.putchar=async (req,res)=>{
    try{
    const character=await Character.updateOne(
        {"id":req.params.id},
        req.body,
        {

            runValidators:true,
        })
        res.status(200).json({
            message:"data updated",
            data:character
        })
    }catch(err){
        console.log(err)
    }
}
exports.delchar=async (req,res)=>{
try{
    const character=await Character.deleteOne({"id":req.params.id})
    res.status(200).json({
        message:"data deleted",
    })
}catch(err){
    console.log(err)
}
}