import React from 'react'

export default function CarOptionInput({ setMark }) {
  return (
    <>
      <label htmlFor="mark">Mark</label>
      <select
        name="mark"
        onChange={(e) => setMark(e.target.value)}
        className="border border-gray-900"
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
      </select>
    </>
  )
}
