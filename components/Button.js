import React from 'react'

const style =
  'px-6 py-4 bg-gradient bg-gradient-to-r border border-white-500 hover:border-transparent bg-transparent hover:text-white hover:from-red-500 hover:to-orange-500 rounded-3xl transition-all ease-in-out duration-500'

export default function Button({ className, children, onClick }) {
  return (
    <button className={`${style} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
