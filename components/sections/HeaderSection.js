// import { useState } from 'react'

export default function HeaderSection() {
  // const [mark, setMark] = useState('mark')

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-5">
          <div className="flex flex-row">
            <div className="flex flex-col ">
              <select name="mark">
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="vw">VW</option>
                <option value="opel">Opel</option>
                <option value="citroen">Citroen</option>
                <option value="peugeot">Peugeot</option>
              </select>
            </div>
            <div className="flex flex-col">
              <select name="model">
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
