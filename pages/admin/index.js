import axios from 'axios'
import Router from 'next/router'
import { useState } from 'react'
import usePagination from 'utils/usePagination'

import Add from '@/components/Add'
import Layout from '@/components/layout/Layout'
export default function index({ cars }) {
  const _DATA = usePagination(cars, 10)
  const arr = Array.from({ length: _DATA.maxPage }, (_, i) => i + 1)
  const [add, setAdd] = useState(true)
  const [carsList, setCarsList] = useState(cars)

  async function handleDelete(id) {
    try {
      await axios.delete('http://auto.keta.mk/api/cars/' + id)
      setCarsList(carsList.filter((car) => car._id !== id))
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
    Router.reload()
  }
  return (
    <Layout title="Admin">
      {console.log(cars)}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button onClick={() => setAdd(false)}>Add</button>

            {!add && <Add setAdd={setAdd} />}
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
                      <button>Edit</button>
                      <button className="ml-2" onClick={() => handleDelete(car._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const carsProd = await axios.get('https://auto.keta.mk/api/cars')
  return {
    props: {
      cars: carsProd.data,
    },
  }
}
