const mongoose=require("mongoose")

const Characterschema=mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String
    },
    status:{
        type:String
    },
    species:
    {
        type:String
    },
    gender:{
        type:String
    },
    origin:{
        type:String
    },
    location:{
        type:String
    },
    episodes:[
        {
            type:String
        }
    ]

})
module.exports=mongoose.model("Characterdetails",Characterschema)