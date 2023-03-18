import Image from 'next/image'
import React from 'react'
import SVG from 'react-inlinesvg'

export default function CarsItem() {
  return (
    <div className="col-4">
      <div className="bg-white p-1 rounded-xl">
        <Image
          src="/images/product1.jpg"
          alt="car"
          width={300}
          height={450}
          className="w-full h-auto rounded-xl"
        />
        <div className="row justify-center p-4">
          <h3 className="text-xl border-b-2 pb-3 border-red-500 text-black hover:text-red-500 my-5 text-center">
            VW CRAFTER 2EKE1 2.0TDI 109H
          </h3>
          <div className="col-6">
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/calendar.svg" className="w-10 h-10" />
              <p className="ml-2">2009</p>
            </div>
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/car-transmission.svg" className="w-10 h-10" />
              <p className="ml-2">Manual</p>
            </div>
          </div>
          <div className="col-6">
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/carsspeed.svg" className="w-10 h-10" />
              <p className="ml-2">25000</p>
            </div>
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/petrol.svg" className="w-10 h-10" />
              <p className="ml-2">Diesel</p>
            </div>
          </div>
          <div className="col-6 mt-5 text-center">
            <p className="font-bold text-xl">E 14,000.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
