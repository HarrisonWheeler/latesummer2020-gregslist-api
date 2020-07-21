import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HouseService {
  async delete(houseId) {
    return await dbContext.Houses.findByIdAndDelete(houseId)
  }

  async edit(houseId, rawEditedHouseData) {
    return await dbContext.Houses.findByIdAndUpdate(houseId, rawEditedHouseData, { new: true })
  }

  async getAll() {
    return await dbContext.Houses.find()
  }

  async getHouseById(id) {
    let house = await dbContext.Houses.findById(id)
    if (!house) {
      throw new BadRequest("Invalid ID")
    }
    return house
  }


  async getAllOneStoryHouses() {
    return await dbContext.Houses.find({ levels: 1 })
  }

  async create(rawHouseData) {
    let house = await dbContext.Houses.create(rawHouseData)
    return house
  }

}

export const houseService = new HouseService()