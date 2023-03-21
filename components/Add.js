import axios from 'axios'
import Router from 'next/router'
import { useState } from 'react'

import styles from '../styles/Add.module.css'
import AdminInput from './AdminInput'
import CarOptionInput from './CarOptionInput'
import uploadCloudinary from './Upload'
import YearOption from './YearOption'

export default function Add({ setAdd }) {
  const [files, setFiles] = useState([])
  const [mark, setMark] = useState(null)
  const [model, setModel] = useState(null)
  const [price, setPrice] = useState(null)
  const [year, setYear] = useState(null)
  const [km, setKm] = useState(null)
  const [fueltype, setFuelType] = useState(null)
  const [transmission, setTransmission] = useState(null)
  const [chair, setChair] = useState(null)
  const [color, setColor] = useState(null)
  const [motor, setMotor] = useState(null)
  async function handleCreate() {
    const data = new FormData()
    data.append('file', files)
    data.append('upload_preset', 'uploads')

    try {
      let arr = []
      for (let i = 0; i < files.length; i++) {
        const data = await uploadCloudinary(files[i])
        arr.push(data)
      }
      const newProduct = {
        mark,
        model,
        price,
        year,
        km,
        fueltype,
        transmission,
        images: arr,
        chair,
        color,
        motor,
      }
      await axios.post('https://auto.keta.mk0/api/cars', newProduct)
      //   setAdd(true)
      Router.reload()
      //   setAdd(true)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  return (
    <div className="container">
      <div className="row justify-center">
        <button onClick={() => setAdd(true)}></button>
        <div className="col-8">
          <div className={styles.item}>
            <label htmlFor="image" className={styles.label}>
              Choose an image
            </label>
            <input
              id="image"
              type="file"
              multiple={true}
              onChange={(e) => setFiles(e.target.files)}
            />
          </div>
          <CarOptionInput setMark={setMark} />
          <AdminInput name="model" label="Model" onChange={setModel} />
          <AdminInput name="price" label="Price" onChange={setPrice} />
          <YearOption setYear={setYear} />
          <AdminInput name="km" label="Km" onChange={setKm} />
          <AdminInput name="motor" label="Motor" onChange={setMotor} />
          <AdminInput name="chair" label="Chair" onChange={setChair} />
          <AdminInput name="color" label="Color" onChange={setColor} />
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            name="fuelType"
            onChange={(e) => setFuelType(e.target.value)}
            className="border border-gray-900"
          >
            <option value={null}>Select fuel type</option>
            <option value="diesel">Diesel</option>
            <option value="benzin">Benzin</option>
          </select>
          <label htmlFor="transmission">Transmission</label>
          <select
            name="fuelType"
            className="border border-gray-900"
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option value={null}>Select transmission</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
            <option value="step-tronic">Step-Tronic</option>
          </select>

          <button onClick={() => handleCreate()}>Add</button>
        </div>
      </div>
    </div>
  )
}
