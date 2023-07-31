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
        type: mongoose.Types.ObjectId,
        required: true,
    },
    applied:{
        type: Array,
        required:true,
        default: []
    },
    duration:{
        type: Number,
    }
},
{
    timestamps: true,
})

const Job = mongoose.model('jobs', jobSchema)

export default Job