import axios from 'axios'
import Router from 'next/router'
import React, { useState } from 'react'
import usePagination from 'utils/usePagination'

import Button from './Button'
import ProductEdit from './ProductEdit'
export default function Pagination({ cars }) {
  const _DATA = usePagination(cars, 10)
  const arr = Array.from({ length: _DATA.maxPage }, (_, i) => i + 1)
  const [carsList, setCarsList] = useState(cars)
  //   const [edit, setEdit] = useState(true)

  async function handleDelete(id) {
    try {
      await axios.delete('https://auto.keta.mk/api/cars/' + id)
      setCarsList(carsList.filter((car) => car._id !== id))
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
    Router.reload()
  }

  return (
    <>
      <div>
        <table className="mt-5 w-full bg-white rounded-lg">
          <thead className="px-4 py-2">
            <tr>
              <td className="px-3">Product Id</td>
              <td className="px-3">Mark</td>
              <td className="text-center">Model</td>
              <td>Year</td>
              <td>KM</td>
              <td>Fuel Type</td>
              <td>Transmission</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {_DATA.currentData(cars).map((car) => (
              <tr className="border-b border-black" key={car._id}>
                <td>{car._id}</td>
                <td>{car.mark}</td>
                <td className="text-center">{car.model}</td>
                <td>{car.year}</td>
                <td>{car.km}</td>
                <td>{car.fueltype}</td>
                <td>{car.transmission}</td>
                <td>{car.price.toLocaleString()}.00 € </td>
                <td>
                  <ProductEdit product={car} />
                  <button className="ml-2 bg-red-300" onClick={() => handleDelete(car._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex md:flex-row flex-wrap items-center mt-5">
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
    </>
  )
}
