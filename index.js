const express = require('express')
const app = express()
const connectdb = require('./config/db')
const userRoutes = require('./routes/Authroute')
const charRoutes=require("./routes/Charroute")


app.use(express.json())
connectdb()




app.get('/',(req,res)=>{
   res.end('service is running')

})

app.use('/',userRoutes)
app.use('/',charRoutes)

app.listen(3000,()=>{
    console.log('server started')
})