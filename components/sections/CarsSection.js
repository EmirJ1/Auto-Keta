//Per teti diftu kit ceret
import React from 'react'

import CarsItem from '../CarsItem'

export default function CarsSection({ cars }) {
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="row my-5">
          {cars
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
            .map((car) => (
              <CarsItem key={car._id} cars={car} />
            ))}
            {console.log(cars)}
        </div>
      </div>
    </div>
  )
}
