//Per te ti shtu produktet
import axios from 'axios'
import Router from 'next/router'
import { useState } from 'react'

import styles from '../styles/Add.module.css'
import AdminInput from './AdminInput'
import CarOptionInput from './CarOptionInput'
import ExtraCheckbox from './ExtraCheckbox'
import uploadCloudinary from './Upload'
import YearOption from './YearOption'

export default function Add({ setAdd }) {
  const extrasList = [
    'ESP',
    'ABS',
    'Navigation',
    'Karrige e perparme elekt.',
    'Karriget e pasme elekt.',
    'Sistemi Start/Stop',
    'Sensori i shiut',
    'Ngrohja e sediljeve të përparme',
    'Ngrohja e sediljeve të pasme',
    'Kondicioner',
    'Televizor',
    'Kabinë virtuale',
    'Kompjuter udhëtimi',
    'Elektriciteti i retrovizorëve',
    'Tempomat',
    'Bluetooth',
    'Ngrohja e timonit',
    'Euro Kuka',
    'Elektriciteti i dritareve',
    'Çati diellore',
    'Kontrollet e timonit',
    'Timoni me energji elektrike (Servo)',
    'Dritat ksenon',
    'Dritat LED',
    'Senzor parkimi',
    'Spërkatjet e farave',
    'Maglenka',
    'Mbyllje qendrore',
    'Enterior lekure',
    'USB Port',
    'AUX Port',
    'Touchscreen',
    'Kamera parkimi',
    'Autohold',
    'Asistencë parkimi',
    'F1 Menuvac',
    'Gjurmimi automatik i korsisë',
    'Sensori i presionit të gomave',
    'AIRBAGS',
  ]
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
  const [extras, setExtras] = useState([])
  const [sale, setSale] = useState(null)
  const handleCheck = (event) => {
    var updatedList = [...extras]
    if (event.target.checked) {
      updatedList = [...extras, event.target.value]
    } else {
      updatedList.splice(extras.indexOf(event.target.value), 1)
    }
    setExtras(updatedList)
  }
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
        sale,
        extras,
      }
      await axios.post('https://autoketa.mk/api/cars', newProduct)
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
            <option value="benzin/LPG">Benzin/LPG</option>
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
          <div className="row my-5">
            <div className="col-12">
              <p className="my-2 text-xl">Pajisjet extra</p>
            </div>
            <div className="lg:col-4">
              <div className="flex flex-col space-y-5">
                {extrasList.slice(0, 13).map((extraItem) => (
                  <ExtraCheckbox
                    key={extraItem}
                    name={extraItem}
                    value={extraItem}
                    onChange={handleCheck}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-4 mt-5 lg:mt-0">
              <div className="flex flex-col space-y-5">
                {extrasList.slice(13, 26).map((extraItem) => (
                  <ExtraCheckbox
                    key={extraItem}
                    name={extraItem}
                    value={extraItem}
                    onChange={handleCheck}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-4 mt-5 lg:mt-0">
              <div className="flex flex-col space-y-5">
                {extrasList.slice(26, 39).map((extraItem) => (
                  <ExtraCheckbox
                    key={extraItem}
                    name={extraItem}
                    value={extraItem}
                    onChange={handleCheck}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="my-5">NEW / OLD / SOLD</p>
          <input type="radio" name="sale" value="0" onChange={(e) => setSale(e.target.value)} />
          <label htmlFor="sale">NEW</label>
          <input type="radio" name="sale" value="1" onChange={(e) => setSale(e.target.value)} />
          <label htmlFor="sale">OLD</label>
          <input type="radio" name="sale" value="2" onChange={(e) => setSale(e.target.value)} />
          <label htmlFor="sale">SOLD</label>
          <div className="col-12">
            <button
              className="mt-5 bg-green-500 px-4 py-2 rounded-md text-white"
              onClick={() => handleCreate()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
