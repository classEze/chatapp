const mongoose=require('mongoose')
const schema=mongoose.Schema
const schemaGoogle=new schema({
    Name:String,
    Age:Number,
    Gender:String,
    CreatedAt:{type:String,default:Date.now}
})

const modelGoogle=mongoose.model('Google_base',schemaGoogle)
// const saveThis=new modelGoogle(
//     {name:'Tosan', gender:'female', age:24}
//     )

// modelGoogle.find({}, (err, result)=>{
//     if(err) return console.log(err)
//     console.log(' Result: ' + result[0].name)
// })
module.exports=modelGoogle