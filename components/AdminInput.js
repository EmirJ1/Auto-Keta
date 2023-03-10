import React from 'react'

export default function AdminInput({ name, label, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        onChange={(e) => onChange(e.target.value)}
        className="mt-5 border border-gray-900"
      />
    </>
  )
}
