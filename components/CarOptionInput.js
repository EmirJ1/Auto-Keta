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
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="vw">VW</option>
        <option value="citroen">Citroen</option>
        <option value="ford">Ford</option>
        <option value="opel">Opel</option>
        <option value="peugeot">Peugeot</option>
        <option value="hyundai">Hyundai</option>
        <option value="toyota">Toyota</option>
        <option value="suzuki">Suzuki</option>
        <option value="mazda">Mazda</option>



      </select>
    </div>
  )
}
