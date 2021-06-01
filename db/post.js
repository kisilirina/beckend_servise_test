import mongoose from 'mongoose'
const {Schema, model} = mongoose;

const postSchema = new Schema({
  author: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  picture: String,
})

export default model('Post', postSchema);