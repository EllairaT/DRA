/**
 * @module Job
 * @category Models
 * */
const mongoose = require('mongoose')

const { Schema } = mongoose
mongoose.Promise = global.Promise

/**
 * model for job
 * @typedef {Object} jobSchema
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
 * @todo create example
 */

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema)
export default Job
