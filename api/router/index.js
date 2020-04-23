var router=require("express").Router()
var user=require('../controller/user') //controller


router.post('/registercity',user.registercity)
router.post('/addpopulation',user.addpopulation)

module.exports=router;
