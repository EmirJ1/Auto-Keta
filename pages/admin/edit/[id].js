// Facja per ti ndru te dhenat e vetures
import axios from 'axios'
import Router from 'next/router'
import { useState } from 'react'
import dbConnect from 'utils/mongo'

import EditInput from '@/components/EditInput'
import ExtraCheckbox from '@/components/ExtraCheckbox'
import Layout2 from '@/components/layout/Layout2'

export default function AdminProductEdit({ product }) {
  const id = product._id
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
  const [mark, setMark] = useState(product.mark)
  const [model, setModel] = useState(product.model)
  const [price, setPrice] = useState(product.price)
  const [year, setYear] = useState(product.year)
  const [km, setKm] = useState(product.km)
  const [motor, setMotor] = useState(product.motor)
  const [chair, setChair] = useState(product.chair)
  const [fueltype, setFuelType] = useState(product.fueltype)
  const [transmission, setTransmission] = useState(product.transmission)
  const [extras, setExtras] = useState(product.extras)
  const [color, setColor] = useState(product.color)
  const [sale, setSale] = useState(product.sale)
  const handleCheck = (event) => {
    var updatedList = [...extras]
    if (event.target.checked) {
      updatedList = [...extras, event.target.value]
    } else {
      updatedList.splice(extras.indexOf(event.target.value), 1)
    }
    setExtras(updatedList)
  }
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
        extras,
        color,
        sale,
      }

      await axios.put('http://localhost:3000/api/cars/' + id, Product)
      Router.push('/admin')
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
  return (
    <Layout2 title="Admin Edit">
      <div className="bg-gray-200 rounded-2xl p-12 col-12 ">
        <h1 className="mt-2 font-bold">Update</h1>
        <div>
          <p className="mt-2">Product with id: {id}</p>
        </div>
        <div className="row mt-2">
          <div className="lg:col-6">
            <label htmlFor="mark">Mark</label>
            <select
              name="mark"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
              className="w-full border rounded-md p-1 border-black"
            >
              <option value={null}>Select Model</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Citroen">Citroen</option>
              <option value="Ford">Ford</option>
              <option value="Opel">Opel</option>
              <option value="Peugeot">Peugeot</option>
              <option value="VW">VW</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Toyota">Toyota</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Mazda">Mazda</option>
            </select>
          </div>
          <EditInput name="model" label="Model" value={model} onChange={setModel} />
          <div className="lg:col-6">
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
              <option value="benzin">Benzin/LPG</option>
            </select>
          </div>
          <div className="lg:col-6">
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
          <EditInput name="color" label="Color" value={color} onChange={setColor} />
        </div>
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
        <p className="my-5">NEW/OLD/SOLD</p>
        {sale == 0 ? (
          <>
            <input
              type="radio"
              name="sale"
              value="0"
              checked
              onChange={(e) => setSale(e.target.value)}
            />
            <label htmlFor="sale">NEW</label>
            <input type="radio" name="sale" value="1" onChange={(e) => setSale(e.target.value)} />
            <label htmlFor="sale">OLD</label>
            <input type="radio" name="sale" value="2" onChange={(e) => setSale(e.target.value)} />
            <label htmlFor="sale">SOLD</label>
          </>
        ) : sale == 1 ? (
          <>
            <input type="radio" name="sale" value="0" onChange={(e) => setSale(e.target.value)} />
            <label htmlFor="sale">NEW</label>
            <input
              type="radio"
              name="sale"
              value="1"
              checked
              onChange={(e) => setSale(e.target.value)}
            />
            <label htmlFor="sale">OLD</label>
            <input type="radio" name="sale" value="2" onChange={(e) => setSale(e.target.value)} />
            <label htmlFor="sale">SOLD</label>
          </>
        ) : (
          <>
            <input type="radio" name="sale" value="0" onChange={(e) => setSale(e.target.value)} />
            <label htmlFor="sale">NEW</label>
            <input type="radio" name="sale" value="1" onChange={(e) => setSale(e.target.value)} />
            <label htmlFor="sale">OLD</label>
            <input
              type="radio"
              name="sale"
              value="2"
              checked
              onChange={(e) => setSale(e.target.value)}
            />
            <label htmlFor="sale">SOLD</label>
          </>
        )}
        <button
          className="mt-2 bg-blue-500 text-white rounded-md px-5 py-2 w-full"
          onClick={() => handleUpdate(product._id)}
        >
          Update
        </button>
      </div>
    </Layout2>
  )
}
export async function getServerSideProps({ params }) {
  try {
    await dbConnect()
    const res = await axios.get(`http://localhost:3000/api/cars/${params.id}`)
    return {
      props: {
        product: res.data,
      },
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {
      notFound: true,
    }
  }
}
