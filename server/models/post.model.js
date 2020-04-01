import mongoose from 'mongoose'
import crypto from 'crypto'
const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Name is required'
  },
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Post', PostSchema)
