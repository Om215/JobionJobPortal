import express from 'express'
import Candidate from '../models/candidateModel.js'
const router = express.Router()

//Fetch all Candidates
router.get('/',async(req,res)=>{
    try{
        const candidateResult = await Candidate.find({})
        res.send(candidateResult)
    }catch(e){
        res.status(500).send(e)
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