const express = require('express')
const cors = require('cors')
const app = express()

/* CONFIG */
app.use(cors())
app.use(express.json())
require('dotenv').config()
/* MODEL */
const candidates = require('./model/userModel') 

/* Create a new user */
app.post('/api/createCandidate',(req,res)=>{
    const {firstName, lastName, email, password} = req.body;
    console.log(req.body)
    console.log(email)
})

app.listen(process.env.PORT || 3002 , ()=>{
    console.log("server running on port 3001")
})