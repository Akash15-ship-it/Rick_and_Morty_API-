const mongoose = require('mongoose')
const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8", "1.1.1.1"]); 
const connectdb = async()=>{
    try{
         await mongoose.connect("mongodb+srv://akashdamerla15ai_db_user:5415@cluster0.bsrfcyx.mongodb.net/?appName=Cluster0")
         console.log("connected db")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb