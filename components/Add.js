import axios from 'axios'
import Router from 'next/router'
import { useState } from 'react'

import AdminInput from './AdminInput'
import CarOptionInput from './CarOptionInput'

export default function Add({ setAdd }) {
  // const [file, setFile] = useState(null)
  const [mark, setMark] = useState(null)
  const [model, setModel] = useState(null)
  const [price, setPrice] = useState(null)
  const [year, setYear] = useState(null)
  const [km, setKm] = useState(null)
  const [fueltype, setFuelType] = useState(null)
  const [transmission, setTransmission] = useState(null)
  async function handleCreate() {
    const data = new FormData()
    // data.append('file', file)
    data.append('upload_preset', 'uploads')
    try {
      //   const uploadRes = await axios.post(
      //     'https://api.cloudinary.com/v1_1/drujet4ue/image/upload',
      //     data
      //   )
      //   const { url } = uploadRes.data
      const newProduct = {
        mark,
        model,
        price,
        year,
        km,
        fueltype,
        transmission,
      }
      await axios.post('https://auto.keta.mk/api/cars', newProduct)
      //   setAdd(true)
      Router.reload()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  return (
    // <div className={styles.container}>
    //   <div className={styles.wrapper}>
    //     <span onClick={() => setAdd(true)} aria-hidden="true" className={styles.close}>
    //       X
    //     </span>
    //     <h1>Add a new Car</h1>
    //     <div className={styles.item}>
    //       <label htmlFor="image" className={styles.label}>
    //         Choose an image
    //       </label>
    //       <input id="image" type="file" onChange={(e) => setFile(e.target.files[0])} />
    //     </div>
    //     <div className={styles.item}>
    //       <label htmlFor="title" className={styles.label}>
    //         Mark
    //       </label>
    //       <input
    //         id="mark"
    //         className={styles.input}
    //         type="text"
    //         onChange={(e) => setMark(e.target.value)}
    //       />
    //     </div>
    //     <div className={styles.item}>
    //       <label htmlFor="model" name="model" className={styles.label}>
    //         Model
    //       </label>
    //       <textarea id="model" rows={4} type="text" onChange={(e) => setModel(e.target.value)} />
    //     </div>
    //     <div className={styles.item}>
    //       <label htmlFor="price" className={styles.label}>
    //         Prices
    //       </label>
    //       <div className={styles.input}>
    //         <input
    //           className={styles.input}
    //           id="price"
    //           type="number"
    //           placeholder="Small"
    //           onChange={(e) => changePrice(e, 0)}
    //         />
    //       </div>
    //     </div>
    //     <div className={styles.item}></div>
    //     <button className={styles.addButton} onClick={handleCreate}>
    //       Create
    //     </button>
    //   </div>
    // </div>
    <div className="container">
      <div className="row justify-center">
        <button onClick={() => setAdd(true)}></button>
        <div className="col-8">
          <CarOptionInput setMark={setMark} />
          <AdminInput name="model" label="Model" onChange={setModel} />
          <AdminInput name="price" label="Price" onChange={setPrice} />
          <AdminInput name="year" label="Year" onChange={setYear} />
          <AdminInput name="km" label="Km" onChange={setKm} />
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
