import ValueSchema from "../models/Value";
import CarSchema from "../models/Car"
import mongoose from "mongoose";
import HouseSchema from "../models/House";
import JobsSchema from "../models/Job"

class DbContext {
  constructor() {
    this.Values = mongoose.model("Value", ValueSchema);
    this.Cars = mongoose.model("Car", CarSchema);
    this.Houses = mongoose.model("House", HouseSchema);
    this.Jobs = mongoose.model("Job", JobsSchema)
  }
}

export const dbContext = new DbContext();
