import express from 'express'
const router = express.Router()

import Job from '../models/jobModel.js'

router.post(('/'),async(req,res) =>{
    try{
        const addjob = new Job(req.body)
        console.log(req.body)
        const insertJob = await addjob.save()
        res.status(201).send(insertJob)
    }catch(e){
        res.status(400).send(e)
    }
}
)

export default router