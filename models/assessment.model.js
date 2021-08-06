/** @module Models */
import { Mongoose } from 'mongoose'

const mongoose = Mongoose
const { Schema, Model } = mongoose

const assessmentSchema = new Schema({

})


const assessmentModel = new Model('Assessment', assessmentSchema)

export default assessmentModel