/** @module Models */
import mongoose from 'mongoose'

const { Schema } = mongoose

const assessmentSchema = new Schema({
    siteName: String
})


const assessmentModel = mongoose.model('Assessment', assessmentSchema)

export default assessmentModel