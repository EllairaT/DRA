import { Timestamp } from 'mongodb'
import { Mongoose } from 'mongoose'

const mongoose = Mongoose
const { Schema, Model } = mongoose

const jobSchema = new Schema({
  date: Date,
  timeStart: Timestamp,
  timeEnd: Timestamp,
  site: String,
  siteType: String,
  phone: String,
  inspector: String,
  notes: String,
  siteTags: [String],
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Job = new Model('Job', jobSchema)

export default Job