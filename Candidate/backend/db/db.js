const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected Successfully")
}).catch((e)=>{
    console.log("No connection",e)
})