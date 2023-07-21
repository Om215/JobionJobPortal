import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    jobTitle:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true,
        default: '',
    },
    opType:{
        type: String,
        required: true,
    },
    jobType:{
        type: String,
        required: true,
    },
    jobCategory:{
        type: String,
        required:true,
    },
    skills:{
        type: Array,
        required: true,
        default: [],
    },
    salary:{
        type: String,
        required: true,
    },
    vacancies: {
        type: Number,
        required: true,
    },
    jobDescription:{
        type: String,
        required: true,
    },
    postedBy:{
        type: String,
        required: true,
    },
    applied:{
        type: Array,
        required:true,
        default: []
    }
},
{
    timestamps: true,
})

const Job = mongoose.model('jobs', jobSchema)

export default Job