//Inputi per ti zgjedh apo ti shtojsh veturat
import React from 'react'

export default function CarOptionInput({ setMark }) {
  return (
    <div className="col-12">
      <label htmlFor="mark">Mark</label>
      <select
        name="mark"
        onChange={(e) => setMark(e.target.value)}
        className="w-full border rounded-md p-1 border-black"
      >
        <option value={null}>Select Model</option>
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
  )
}
