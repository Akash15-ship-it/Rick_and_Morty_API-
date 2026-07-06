const express = require('express')
const app = express()
const connectdb = require('./config/db')
const userRoutes = require('./routes/Authroute')
const charRoutes=require("./routes/Charroute")
const epiRoutes=require("./routes/Episode")
const locRoutes=require("./routes/Locroute")

app.use(express.json())
connectdb()


app.use('/',charRoutes)

app.get('/',(req,res)=>{
   res.end('service is running')

})
app.use('/',userRoutes)
app.use('/',epiRoutes)
app.use('/',locRoutes)


app.listen(3000,()=>{
    console.log('server started')
})