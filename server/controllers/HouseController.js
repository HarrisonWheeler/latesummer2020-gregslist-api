import BaseController from "../utils/BaseController";
import { houseService } from "../services/HouseService";



export class HouseController extends BaseController {
  constructor() {
    super("api/houses")
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .put("/:id", this.edit)
      .delete('/:id', this.delete)
  }


  async create(req, res, next) {
    try {
      let rawHouseData = req.body
      let house = await houseService.create(rawHouseData)
      res.send({ data: house, message: "Created the house!" })
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let rawEditedHouseData = req.body
      let house = await houseService.edit(req.params.id, rawEditedHouseData)
      res.send({ data: house, message: "Edited the house!" })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await houseService.delete(req.params.id)
      res.send("Deleted")
    } catch (err) {
      next(err)
    }
  }

  async getAll(req, res, next) {
    try {
      let houses = await houseService.getAll()
      res.send({ data: houses, message: "Got the houses!" })
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      let house = await houseService.getHouseById(req.params.id)
      res.send({ data: house, message: "Got the house" })
    } catch (error) {
      next(error)
    }
  }

}
