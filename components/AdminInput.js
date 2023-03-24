//elementi ku hejn ti bojsh add te dhenat e vetures
import React from 'react'

export default function AdminInput({ name, label, value, onChange }) {
  return (
    <>
      <div className="col-12">
        <label htmlFor={name} className="flex flex-col">
          {label}
        </label>
        <input
          id="mark"
          className="w-full border rounded-md p-1 border-black"
          value={value}
          type="text"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  )
}
