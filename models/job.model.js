import { Mongoose } from 'mongoose'

const mongoose = Mongoose
const {Schema} = mongoose

const JobSchema = new Schema({
  date: Date,
  site: String
})
