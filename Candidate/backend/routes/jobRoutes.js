import express from 'express'
const router = express.Router()
import Job from '../models/jobModel.js'

//FETCH JOB
router.get('/job',async(req,res)=>{
    try{
        const jobResult = await Job.find({opType: 'job'})
        console.log(jobResult)
        res.status(200).send(jobResult)
    }catch(e){
        res.status(500).send(e)
    }  
})

router.get('/internship',async(req,res)=>{
    try{
        const jobResult = await Job.find({opType: 'internship'})
        res.status(200).send(jobResult)
    }catch(e){
        res.status(500).send(e)
    }  
})

export default router;