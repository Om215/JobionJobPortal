import express from 'express'
import Job from '../models/jobModel.js'

const router = express.Router()

//POST A NEW JOB
router.post(('/'),async(req,res) =>{
    try{
        const addjob = new Job(req.body)
        console.log(req.body)
        const insertJob = await addjob.save()
        res.status(201).send(insertJob)
    }catch(e){
        res.status(400).send(e)
        console.log(e.message)
    }
})

//FETCH ALL JOB FROM RECRUITER ID
router.get(('/:id'),async(req,res) =>{
    try{
        const id = req.params.id
        const result = await Job.find({postedBy: id, })
        res.status(200).send(result) 
        }catch(e){
            res.status(500).send(e)
        }
})

//FETCH JOB OPPORTUNITIES POSTED BY RECRUITER
router.get(('/:id/jobs'),async(req,res) =>{
    try{
        const id = req.params.id
        const result = await Job.find({opType: 'job', postedBy: id })
        res.status(200).send(result) 
        }catch(e){
            res.status(500).send(e)
        }
})

//FETCH INTERNSHIPS POSTED BY RECRUITER
router.get(('/:id/internships'),async(req,res) =>{
    try{
        const id = req.params.id
        const result = await Job.find({opType: 'internship', postedBy: id })
        res.status(200).send(result) 
        }catch(e){
            res.status(500).send(e)
        }
})

//DELETE JOB/INTERNSHIP POSTED BY RECRUITER
router.delete(('/:id'), async(req,res)=>{
    try{
        const id = req.params.id
        const result = await Job.findByIdAndRemove(id)
        res.status(204).send("Deleted Successfully")
    }catch(e){
        res.status(404).send(e)
    }
})

export default router