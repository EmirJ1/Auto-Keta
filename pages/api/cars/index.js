//Konektimi ne database 
import Car from 'models/Car'
import dbConnect from 'utils/mongo'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()
  if (method === 'GET') {
    try {
      const cars = await Car.find()
      res.status(200).json(cars)
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
}
