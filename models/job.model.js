/** @module Models */
import { Timestamp } from 'mongodb'
import { Mongoose } from 'mongoose'
import Assessment from './assessment.model'

const mongoose = Mongoose
const { Schema, Model } = mongoose

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
  timeStart: Timestamp,
  timeEnd: Timestamp,
  site: String,
  siteAddress: String,
  siteType: String,
  phone: String,
  inspector: String,
  notes: String,
  siteTags: [String],
  assessments: [Assessment],
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
const Job = new Model('Job', jobSchema)


export default Job