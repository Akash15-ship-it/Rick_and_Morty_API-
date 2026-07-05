const mongoose=require("mongoose")

const LocationSchema=mongoose.Schema({
    id:{
        type:Number
    },
    lname:{
        type:String
    },
    ltype:{
   type:String
    },
    dimension:{
        type:String
    },
    residents:{
        type:Array
    }
})

module.exports=mongoose.model("Locationdetails",LocationSchema)