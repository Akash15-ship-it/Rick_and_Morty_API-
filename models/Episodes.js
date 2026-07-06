const mongoose=require("mongoose")

const Episodeschema=mongoose.Schema({
    id:{
        type:Number
    },
    ename:{
        type:String
    },
    air_date:{
        type:String
    },
    ecode:{
        type:String
    },
    characters:[{
        type:String
    }
]
})
module.exports=mongoose.model("Episodedetials",Episodeschema)