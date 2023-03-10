import Car from 'models/Car'
import dbConnect from 'utils/mongo'

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req

  await dbConnect()
  if (method === 'GET') {
    try {
      const car = await Car.find()
      res.status(200).json(car)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  if (method === 'POST') {
    try {
      const car = await Car.create(req.body)
      res.status(201).json(car)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  if (method === 'DELETE') {
    try {
      await Car.findByIdAndDelete(id)
      res.status(200).json('The product has been deleted!')
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
