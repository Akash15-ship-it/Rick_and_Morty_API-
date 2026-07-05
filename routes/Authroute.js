const {register,login} = require('../controller/Authcontroller')
const express = require('express')
const router = express.Router()



router.post('/user/register',register)
router.post('/login',login)


module.exports = router