import { Mongoose } from 'mongoose'

var mongoose = Mongoose
var Schema = mongoose.Schema

var JobSchema = new Schema({
  date: Date,
  site: String
})
