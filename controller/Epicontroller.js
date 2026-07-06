const Episodes=require("../models/Episodes")
const express=require("express")
exports.addepi=async(req,res)=>{
    try{
      const episode=await Episodes.create({
        id:req.body.id,
        ename:req.body.ename,
        air_date:req.body.air_date,
        ecode:req.body.ecode,
        characters:req.body.characters
      })
      res.status(200).json({
        message:"episode add",
        data:episode
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
const episodes=await Episodes.find()
res.status(200).json({
    message:"data fetched",
    data:episodes
})
    }catch(err){
        console.log(err)
    }
}
exports.getbyid=async (req,res)=>{
    try{
   const epsiode=await Episodes.find({"id":req.params.id})
   res.status(200).json({
    data:episode
   })
    }catch(err){
        console.log(err)
    }
}
exports.putepi=async (req,res)=>{
    try{
    const episode=await Episodes.updateOne(
        {"id":req.params.id},
        req.body,
        {

            runValidators:true,
        })
        res.status(200).json({
            message:"data updated",
            data:episode
        })
    }catch(err){
        console.log(err)
    }
}
exports.delepi=async (req,res)=>{
try{
    const episode=await Episodes.deleteOne({"id":req.params.id})
    res.status(200).json({
        message:"data deleted",
    })
}catch(err){
    console.log(err)
}
}