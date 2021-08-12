/** @module Models */
import mongoose from 'mongoose'

const { Schema } = mongoose


/**   
 * model for job
 * @typedef {object} jobSchema
 * @property {Date} date - the date of job
 * @property {Timestamp} timeStart - the start time of the job
 * @property {Timestamp} timeEnd - the end time of the job
 * @property {String} site - name of site being visited
 * @property {String} siteAddress - address of the site
 * @property {String} phone - phone number of the site
 * @property {String} inspector - name of inspector on the job
 * @property {String} notes - additional notes
 * @property {Array<String>} siteTags - keywords related to site address/site type
 * 
*/
const jobSchema = new Schema({
  date: Date,
  site: String,
  siteAddress: String,
  siteType: String,
  phone: String,
  inspector: String,
  notes: String,
  siteTags: [String],
  assessments: [String],
  createdAt: {
    type: Date,
    default: new Date()
  }
})

/**
 * Model object for the Job schema.
 * See {@link jobSchema}
 * @Category Models
 */
const Job = mongoose.model('Job', jobSchema)


export default Job