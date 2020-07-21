import { Schema } from "mongoose";


const House = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  levels: { type: Number, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true }
},
  { timestamps: true, toJSON: { virtuals: true } })


export default House