const express=require("express")
const router=express.Router()
const auth=require("../middleware/Authmiddleware")
const {addloc,getall,getbyid,putloc,delloc}=require("../controller/Loccontroller")


router.post("/location/add",addloc)

router.get('/location',auth,getall)
router.get('/location/:id',getbyid)
router.put('/location/:id',putloc)
router.delete("/location/:id",delloc)


module.exports=router
