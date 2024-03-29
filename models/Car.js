//Deklarimi i pjese ne data base
import mongoose from 'mongoose'

const CarSchema = new mongoose.Schema(
  {
    mark: {
      type: String,
      required: true,
      maxlength: 60,
    },
    model: {
      type: String,
      required: true,
      maxlength: 200,
    },
    year: {
      type: Number,
      required: true,
    },
    km: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    fueltype: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    chair: {
      type: String,
    },
    color: {
      type: String,
    },
    motor: {
      type: String,
    },
    extras: {
      type: Array,
    },
    sale: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Car || mongoose.model('Car', CarSchema)
