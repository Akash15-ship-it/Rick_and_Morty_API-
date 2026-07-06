const Locations=require("../models/Locations")
const express=require("express")
exports.addloc=async(req,res)=>{
    try{
      const location=await Locations.create({
        id:req.body.id,
        lname:req.body.lname,
        ltype:req.body.ltype,
        dimension:req.body.dimension,
        residents:req.body.residents
      })
      res.status(200).json({
        message:"episode add",
        data:location
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
const locations=await Locations.find()
res.status(200).json({
    message:"data fetched",
    data:locations
})
    }catch(err){
        console.log(err)
    }
}
exports.getbyid=async (req,res)=>{
    try{
   const location=await Locations.find({"id":req.params.id})
   res.status(200).json({
    data:location
   })
    }catch(err){
        console.log(err)
    }
}
exports.putloc=async (req,res)=>{
    try{
    const location=await Locations.updateOne(
        {"id":req.params.id},
        req.body,
        {

            runValidators:true,
        })
        res.status(200).json({
            message:"data updated",
            data:location
        })
    }catch(err){
        console.log(err)
    }
}
exports.delloc=async (req,res)=>{
try{
    const location=await Locations.deleteOne({"id":req.params.id})
    res.status(200).json({
        message:"data deleted",
    })
}catch(err){
    console.log(err)
}
}