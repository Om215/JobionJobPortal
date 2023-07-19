import mongoose from 'mongoose'

const candidateSchema = mongoose.Schema(
    {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        // password: {
        //   type: String,
        //   required: true,
        // },
      },
)

const Candidate = mongoose.model('candidates', candidateSchema);

export default Candidate;