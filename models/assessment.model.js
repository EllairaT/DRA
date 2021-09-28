/**
 * @module Assessment
 * @category Models
 */
import mongoose from 'mongoose'

const { Schema } = mongoose

/**
 *  model for assessment
 * @typedef {Object} assessmentSchema
 * @property {String} siteName site where assessment is conducted
 */
const assessmentSchema = new Schema({
  siteName: String
})

/**
 * Model object for the assessment schema.
 * See {@link assessmentSchema}
 */
const Assessment = mongoose.model('Assessment', assessmentSchema)
export default Assessment
