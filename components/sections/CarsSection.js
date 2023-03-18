import React from 'react'

import CarsItem from '../CarsItem'

export default function CarsSection() {
  return (
    <div className="bg-gray-400">
      <div className="container">
        <div className="row my-5">
          <CarsItem />
        </div>
      </div>
    </div>
  )
}
