import dbConnect from 'utils/mongo'

import Car from '../../../models/Car'

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req

  await dbConnect()

  if (method === 'GET') {
    try {
      const car = await Car.findById(id)
      res.status(200).json(car)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  if (method === 'PUT') {
    try {
      const car = await Car.findByIdAndUpdate(id, req.body, {
        new: true,
      })
      res.status(200).json(car)
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
