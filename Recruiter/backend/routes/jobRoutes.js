import express from 'express'
import Job from '../models/jobModel.js'
const router = express.Router()

router.post(('/'),async(req,res) =>{
    try{
        const addjob = new Job(req.body)
        console.log(req.body)
        const insertJob = await addjob.save()
        res.status(201).send(insertJob)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get(('/:id'),async(req,res) =>{
    try{
        const id = req.params.id
        const result = await Job.find({postedBy: id})
        res.status(200).send(result) 
        }catch(e){
            res.status(500).send(e)
        }
        

})

export default router