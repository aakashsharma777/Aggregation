const mongoose =require('mongoose')
const popSchema=mongoose.Schema({
        city:String,
        year:Number,
        population:Number       
})

module.exports=mongoose.model('Population',popSchema);