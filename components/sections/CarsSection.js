import React from 'react'

import CarsItem from '../CarsItem'

export default function CarsSection({ cars }) {
  return (
    <div className="bg-gray-400">
      <div className="container">
        <div className="row my-5">
          {cars.map((car) => (
            <CarsItem key={car._id} cars={car} />
          ))}
        </div>
      </div>
    </div>
  )
}
