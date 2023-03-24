//Pjesa ku i ndron facet next/previous
import axios from 'axios'
import Image from 'next/image'
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
      {_DATA
        .currentData(cars)
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .map((car) => (
          <div className="flex flex-row my-10 border-b border-black pb-8" key={car._id}>
            <div className="flex flex-col">
              <Image src={car.images[0].url} width={300} height={250} alt="foto" />
            </div>
            <div className="flex flex-col ml-10 ">
              <h3 className="">
                {car.mark} {car.model} {car.year} {car.motor}
              </h3>
              <p>Created at: {car.createdAt}</p>
              <p>Updated at: {car.updatedAt}</p>
              <div className="flex flex-inline">
                <ProductEdit product={car} />
                <button
                  className="ml-4 bg-red-500 text-white px-3 rounded-xl"
                  onClick={() => handleDelete(car._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
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
