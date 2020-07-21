import ValueSchema from "../models/Value";
import CarSchema from "../models/Car"
import mongoose from "mongoose";

class DbContext {
  constructor() {
    this.Values = mongoose.model("Value", ValueSchema);
    this.Cars = mongoose.model("Car", CarSchema)
  }
}

export const dbContext = new DbContext();
