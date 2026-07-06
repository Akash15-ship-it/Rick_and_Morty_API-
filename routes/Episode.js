const express=require("express")
const router=express.Router()
const auth=require("../middleware/Authmiddleware")
const {addepi,getall,getbyid,putepi,delepi}=require("../controller/Epicontroller")


router.get('/episode',auth,getall)

router.post("/episode/add",addepi)
router.get('/episode/:id',getbyid)
router.put('/episode/:id',putepi)
router.delete("/episode/:id",delepi)


module.exports=router
