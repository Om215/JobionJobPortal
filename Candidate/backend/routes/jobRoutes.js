import express from 'express'
const router = express.Router()
import { getJobs, getInternships } from '../controllers/jobController.js'


router.get('/internships', getInternships)
router.get('/jobs', getJobs)

export default router;