import express from 'express'
const router = express.Router()
import Job from '../models/jobModel.js'

router.get('/',async(req,res)=>{
    try{
        const jobResult = await Job.find({})
        res.send(jobResult)
    }catch(e){
        res.status(500).send(e)
    }  
})

export default router;