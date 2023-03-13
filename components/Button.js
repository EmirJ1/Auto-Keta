import React from 'react'

const style =
  'px-6 py-4 bg-gradient bg-gradient-to-r border border-red-500 hover:border-transparent bg-transparent hover:text-white hover:from-white-500 hover:to-gray-black rounded-3xl transition-all ease-in-out duration-500'

export default function Button({ className, children, onClick }) {
  return (
    <button className={`${style} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
