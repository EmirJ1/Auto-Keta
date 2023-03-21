import axios from 'axios'
import Router from 'next/router'
import { useState } from 'react'

import EditInput from './EditInput'

export default function ProductEdit({ product }) {
  const id = product._id
  const [edit, setEdit] = useState(false)
  const [mark, setMark] = useState(product.mark)
  const [model, setModel] = useState(product.model)
  const [price, setPrice] = useState(product.price)
  const [year, setYear] = useState(product.year)
  const [km, setKm] = useState(product.km)
  const [motor, setMotor] = useState(product.motor)
  const [chair, setChair] = useState(product.chair)
  const [fueltype, setFuelType] = useState(product.fueltype)
  const [transmission, setTransmission] = useState(product.transmission)

  async function handleUpdate(id) {
    try {
      const Product = {
        mark,
        model,
        price,
        year,
        km,
        motor,
        fueltype,
        transmission,
        chair,
      }

      await axios.put('https://auto.keta.mk0/api/cars/' + id, Product)
      Router.reload()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
  return (
    <>
      <button onClick={() => setEdit(!edit)}>Edit</button>
      <div
        style={{ zIndex: 9999 }}
        className={`bg-gray-500 w-full h-screen absolute top-0 left-0 items-center justify-center ${
          edit ? ' flex' : ' hidden'
        }`}
      >
        <div
          style={{ width: 500 }}
          className="bg-white rounded-2xl p-12 flex flex-col items-center justify-center"
        >
          <button onClick={() => setEdit(false)}>X</button>
          <h1 className="mt-2 font-bold">Update</h1>
          <div>
            <p className="mt-2">Product with id: {id}</p>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <label htmlFor="mark">Mark</label>
              <select
                name="mark"
                value={mark}
                onChange={(e) => setMark(e.target.value)}
                className="w-full border rounded-md p-1 border-black"
              >
                <option value={null}>Select Model</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="citroen">Citroen</option>
                <option value="ford">Ford</option>
                <option value="mercedes">Mercedes</option>
                <option value="opel">Opel</option>
                <option value="peugeot">Peugeot</option>
                <option value="vw">VW</option>
                <option value="hyundai">Hyundai</option>
                <option value="toyota">Toyota</option>
                <option value="toyota">Suzuki</option>
                <option value="toyota">Mazda</option>




              </select>
            </div>
            <EditInput name="model" label="Model" value={model} onChange={setModel} />
            <div className="col-12">
              <label htmlFor="fueltype" className="flex flex-col">
                Fuel Type
              </label>
              <select
                id="fueltype"
                className="w-full border rounded-md p-1 border-black"
                value={fueltype}
                type="text"
                onChange={(e) => setFuelType(e.target.value)}
              >
                <option value="benzin">Benzin</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="transmission" className="flex flex-col">
                Transmission
              </label>
              <select
                id="transmission"
                className="w-full border rounded-md p-1 border-black"
                value={transmission}
                type="text"
                onChange={(e) => setTransmission(e.target.value)}
              >
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
                <option value="step-tronic">Step-tronic</option>
              </select>
            </div>
            <EditInput name="year" label="Year" value={year} onChange={setYear} />
            <EditInput name="km" label="KM" value={km} onChange={setKm} />
            <EditInput name="motor" label="Motor" value={motor} onChange={setMotor} />
            <EditInput name="price" label="Price" value={price} onChange={setPrice} />
            <EditInput name="chair" label="Chair" value={chair} onChange={setChair} />
          </div>
          <button
            className="mt-2 bg-blue-500 text-white rounded-md px-5 py-2"
            onClick={() => handleUpdate(product._id)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  )
}
