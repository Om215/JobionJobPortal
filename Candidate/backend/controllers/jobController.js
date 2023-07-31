import asyncHandler from "express-async-handler";
import Job from '../models/jobModel.js'

//FETCH JOBS
export const getJobs = async(req,res) => {
    try{
        const response = await Job.aggregate([{ 
            $lookup: 
            { 
                from: 'recruiters', 
                localField: 'postedBy', 
                foreignField: '_id', 
                as: 'recruiter' 
            } 
        }])
        console.log(response)
        const result = await response.filter((el)=>{
            return el.opType == 'job'
        })
        console.log(result)
        res.status(200).send(result)
    }catch(e){
        res.status(500).send(e)
    }
};

//FETCH INTERNSHIPS
export const getInternships = async(req,res) => {
    try{
        const response = await Job.aggregate([{ 
            $lookup: 
            { 
                from: 'recruiters', 
                localField: 'postedBy', 
                foreignField: '_id', 
                as: 'recruiter' 
            } 
        }])
        console.log(response)
        const result = await response.filter((el)=>{
            return el.opType == 'internship'
        })
        console.log(result)
        res.status(200).send(result)
    }catch(e){
        res.status(500).send(e)
    }
};