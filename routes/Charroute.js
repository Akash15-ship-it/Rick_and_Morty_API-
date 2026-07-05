const express=require("express")
const router=express.Router()
const auth=require("../middleware/Authmiddleware")
const {addchar,getall,getbyid,putchar,delchar}=require("../controller/Charcontroller")


router.post("/charcter/add",addchar)

router.get('/character',getall)
router.get('/character/:id',getbyid)
router.put('/character/:id',putchar)
router.delete("/character/:id",delchar)


module.exports=router
