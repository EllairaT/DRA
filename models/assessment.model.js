/** @module Models */
import { Timestamp } from 'mongodb'
import { Mongoose } from 'mongoose'

const mongoose = Mongoose
const { Schema, Model } = mongoose

const assessmentSchema = new Schema({
    siteName: String,
    time: Timestamp,
    videoUrl: URL
})


const assessmentModel = new Model('Assessment', assessmentSchema)

export default assessmentModel