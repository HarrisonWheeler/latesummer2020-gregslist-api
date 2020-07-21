import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService";



export class JobsController extends BaseController {
  constructor() {
    super("api/jobs")
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .put("/:id", this.edit)
      .delete('/:id', this.delete)
  }


  async create(req, res, next) {
    try {
      let rawJobData = req.body
      let job = await jobsService.create(rawJobData)
      res.send({ data: job, message: "Created the job!" })
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let rawEditedJobData = req.body
      let jobs = await jobsService.edit(req.params.id, rawEditedJobData)
      res.send({ data: jobs, message: "Edited the Job!" })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await jobsService.delete(req.params.id)
      res.send("Deleted")
    } catch (err) {
      next(err)
    }
  }

  async getAll(req, res, next) {
    try {
      let jobs = await jobsService.getAll()
      res.send({ data: jobs, message: "Got the jobs!" })
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      let job = await jobsService.getJobsById(req.params.id)
      res.send({ data: job, message: "Got the job" })
    } catch (error) {
      next(error)
    }
  }

}
