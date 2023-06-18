const express = require('express')
const cors = require('cors')
const app = express()
const AuthService = require('./auth/AuthService')
const AuthServiceInstance = new AuthService()
/* CONFIG */
app.use(cors())
app.use(express.json())
require('dotenv').config()
require('./db/db')
/* MODEL */
const candidates = require('./model/userModel') 

/* Create a new user */
app.post('/api/auth/signup',async(req,res)=>{
    const { firstName, lastName, email, password } = req.body;

    try{
      const newCandidate = await AuthServiceInstance.signup(firstName, lastName, email, password)
      res.json(newCandidate)
    }  
    catch (err) {
        console.log(err.message);
        res.status(500).send("Error in creating account");
      }
})

/* Login User */
app.post('/api/auth/signin', async(req,res)=>{
    const { email, password } = req.body;
    try{
        const newUser = await AuthServiceInstance.login(email, password)
        res.json(newUser)
      }  
      catch (err) {
          console.log(err.message);
          res.status(500).send("Error in Logging in");
        }
})

app.listen(process.env.PORT || 3002 , ()=>{
    console.log("server running on port 3001")
})