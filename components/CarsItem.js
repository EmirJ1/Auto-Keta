//Shfaqja e 1 produkti ke indexi/home
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SVG from 'react-inlinesvg'

export default function CarsItem({ cars }) {
  return (
    <div className="lg:col-4 md:col-6 mb-8">
      <Link href={`/cars/${cars._id}`} legacyBehavior>
        <a>
          <div className="bg-white p-1 rounded-xl">
            {cars.sale == 0 ? (
              <div className="absolute px-2 mt-5 -ml-3 bg-green-500 text-white">
                <span>NEW</span>
              </div>
            ) : cars.sale == 2 ? (
              <div className="absolute px-2 mt-5 -ml-3 bg-red-500 text-white">
                <span>SOLD</span>
              </div>
            ) : (
              <></>
            )}

            <Image
              src={cars.images[0].url}
              alt="car"
              width={338}
              height={214}
              className="w-full rounded-xl cars-img"
            />
            <div className="row justify-center p-4 ml-4 ">
              <div className="col-12 ">
                <p className="text-xl font-semibold mr-9 my-2 text-center hover:text-red-600">{`${cars.mark} ${cars.model} ${cars.motor}`}</p>
              </div>
              <div className="col-6">
                <div className="w-full inline-flex items-center">
                  <SVG src="/svg/calendar.svg" className="w-8 h-8" />
                  <p className="ml-2">{cars.year}</p>
                </div>
                <div className="w-full inline-flex items-center">
                  <SVG src="/svg/car-transmission.svg" className="w-8 h-8" />
                  <p className="ml-2 uppercase">{cars.transmission}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="w-full inline-flex items-center">
                  <SVG src="/svg/carsspeed.svg" className="w-8 h-8" />
                  <p className="ml-2">{cars.km}</p>
                </div>
                <div className="w-full inline-flex items-center">
                  <SVG src="/svg/petrol.svg" className="w-8 h-8" />
                  <p className="ml-2 uppercase">{cars.fueltype}</p>
                </div>
              </div>
              <p className="text-xl mt-2 text-center font-semibold">
                {cars.price.toLocaleString('en-US')} €
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
