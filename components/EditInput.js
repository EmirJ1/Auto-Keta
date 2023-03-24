//Elementi per ndrimin e produktit
import React from 'react'

export default function EditInput({ name, label, onChange, value }) {
  return (
    <div className="col-12">
      <label htmlFor={name} className="flex flex-col">
        {label}
      </label>
      <input
        id="mark"
        value={value}
        className="w-full border rounded-md p-1 border-black"
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
