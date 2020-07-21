import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {
  async delete(jobId) {
    return await dbContext.Jobs.findByIdAndDelete(jobId)
  }

  async edit(jobId, rawEditedJobData) {
    return await dbContext.Jobs.findByIdAndUpdate(jobId, rawEditedJobData, { new: true })
  }

  async getAll() {
    return await dbContext.Jobs.find()
  }

  async getJobsById(id) {
    let job = await dbContext.Jobs.findById(id)
    if (!job) {
      throw new BadRequest("Invalid ID")
    }
    return job
  }


  async getAllFullTimeJobs() {
    return await dbContext.Jobs.find({ hours: 40 })
  }


  async create(rawJobData) {
    let jobs = await dbContext.Jobs.create(rawJobData)
    return jobs
  }

}

export const jobsService = new JobsService()