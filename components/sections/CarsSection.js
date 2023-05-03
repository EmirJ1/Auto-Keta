//Per teti diftu kit ceret
import { useState } from 'react'
import usePagination from 'utils/usePagination'

import Button from '../Button'
import CarsItem from '../CarsItem'

export default function CarsSection({ cars }) {
  const years = []
  for (let i = 2003; i <= new Date().getFullYear(); i++) {
    years.push(i)
  }
  const models = []
  const [mark, setMark] = useState('all')
  const [model, setModel] = useState('all')
  const [year, setYear] = useState('all')
  const [price, setPrice] = useState(500)
  function handlePrice(e) {
    setPrice(e.target.value)
  }
  if (mark == 'all') {
    cars.filter((car) => {
      models.push(car.model)
    })
  } else {
    let filteredMark = cars.filter((car) => car.mark === mark)
    filteredMark.filter((car) => {
      models.push(car.model)
    })
  }
  let uniqueModels = models.filter((item, index) => {
    return models.indexOf(item) === index
  })
  const lifo = cars.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
  const _DATA = usePagination(lifo, 9)
  const arr = Array.from({ length: _DATA.maxPage }, (_, i) => i + 1)
  return (
    <>
      <div className="bg-white mt-6">
        <div className="container">
          <p className="text-center text-3xl">Zgjidhe veturen tuaj</p>
          <div className="row justify-center">
            <div className="col-8 my-5">
              <div className="row">
                <div className="lg:col-4">
                  <p htmlFor="mark" className="text-center text-xl">
                    Mark
                  </p>
                  <select
                    name="mark"
                    onChange={(e) => setMark(e.target.value)}
                    className="w-full ml-2 border rounded-md p-1 text-center  border-black"
                  >
                    <option value="all">Zgjidh Marken</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="VW">VW</option>
                    <option value="Citroen">Citroen</option>
                    <option value="Ford">Ford</option>
                    <option value="Opel">Opel</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Mazda">Mazda</option>
                  </select>
                </div>
                <div className="lg:col-4 my-5 lg:my-0">
                  <p htmlFor="model" className="text-center text-xl">
                    Model
                  </p>
                  <select
                    name="model"
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full ml-2 border rounded-md p-1 text-center  border-black"
                  >
                    <option value={'all'}>Zgjidh Modelin</option>
                    {uniqueModels.map((modele) => (
                      <>
                        <option key={modele} value={modele}>
                          {modele}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
                <div className="lg:col-4">
                  <p htmlFor="year" className="text-center text-xl">
                    Year
                  </p>
                  <select
                    name="year"
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full ml-2 border rounded-md p-1 text-center  border-black"
                  >
                    <option value={'all'}>Zgjidh Vitin</option>
                    {years.map((year) => (
                      <>
                        <option key={year} value={year}>
                          {year}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <input type="range" onInput={handlePrice} />
                  <p>{price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="container">
          <div className="row my-5">
            {mark == 'all' && year == 'all' && model == 'all' ? (
              <>
                {_DATA.currentData(lifo).map((car) => (
                  <CarsItem key={car._id} cars={car} />
                ))}
              </>
            ) : mark == 'all' && model == 'all' ? (
              <>
                {_DATA
                  .currentData(lifo)
                  .filter((car) => car.year == year)
                  .map((car) => (
                    <CarsItem key={car._id} cars={car} />
                  ))}
              </>
            ) : year == 'all' && model == 'all' ? (
              <>
                {_DATA
                  .currentData(lifo)
                  .filter((car) => car.mark == mark)
                  .map((car) => (
                    <CarsItem key={car._id} cars={car} />
                  ))}
              </>
            ) : mark == 'all' && year == 'all' ? (
              <>
                {_DATA
                  .currentData(lifo)
                  .filter((car) => car.model == model)
                  .map((car) => (
                    <CarsItem key={car._id} cars={car} />
                  ))}
              </>
            ) : mark != 'all' && year == 'all' ? (
              <>
                {_DATA
                  .currentData(lifo)
                  .sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
                  .filter(function (car) {
                    return car.model == model && car.mark == mark
                  })
                  .map((car) => (
                    <CarsItem key={car._id} cars={car} />
                  ))}
              </>
            ) : mark == 'all' && year != 'all' ? (
              <>
                {_DATA
                  .currentData(lifo)
                  .sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
                  .filter(function (car) {
                    return car.model == model && car.year == year
                  })
                  .map((car) => (
                    <CarsItem key={car._id} cars={car} />
                  ))}
              </>
            ) : (
              <>
                {_DATA
                  .currentData(lifo)
                  .sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
                  .filter(function (car) {
                    return car.mark == mark && car.model == model && car.year == year
                  })
                  .map((car) => (
                    <CarsItem key={car._id} cars={car} />
                  ))}
              </>
            )}
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
    </>
  )
}
