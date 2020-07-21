import ValueSchema from "../models/Value";
import CarSchema from "../models/Car"
import mongoose from "mongoose";
import HouseSchema from "../models/House";

class DbContext {
  constructor() {
    this.Values = mongoose.model("Value", ValueSchema);
    this.Cars = mongoose.model("Car", CarSchema);
    this.Houses = mongoose.model("House", HouseSchema);
  }
}

export const dbContext = new DbContext();
