//Per teti diftu kit ceret
import React from 'react'
import usePagination from 'utils/usePagination'

import Button from '../Button'
import CarsItem from '../CarsItem'

export default function CarsSection({ cars }) {
  const _DATA = usePagination(cars, 9)
  const arr = Array.from({ length: _DATA.maxPage }, (_, i) => i + 1)
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="row my-5">
          {_DATA
            .currentData(cars)
            .sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
            .map((car) => (
              <CarsItem key={car._id} cars={car} />
            ))}
        </div>
        <div className="flex md:flex-row flex-wrap items-center mb-8">
          <Button disabled={_DATA.currentPage == 1} className="mr-4" onClick={() => _DATA.prev()}>
            Previous
          </Button>
          {arr.map((e) => (
            <Button
              key={e}
              className={`mr-4 ${
                _DATA.currentPage === e ? 'bg-pink-500 text-black' : 'bg-white text-black'
              }`}
              onClick={() => _DATA.jump(e)}
            >
              {e}
            </Button>
          ))}
          <Button disabled={_DATA.currentPage == _DATA.maxPage} onClick={() => _DATA.next()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
