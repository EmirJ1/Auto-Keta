import React from 'react'
import SVG from 'react-inlinesvg'

export default function FooterSection() {
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="row">
        <div className="col-4">

        </div>
        <div className="col-4">
          <a href='https://facebook.com/autoketa'>
            <SVG src='./svg/facebook.svg' className='w-10 h-10'/>
          </a>
          <p className="">Instagram</p>

        </div>
        </div>
      </div>
    </div>
  )
}
