//Facja e ni produkti si duket mrenda kur klikon te ni veture
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import SVG from 'react-inlinesvg'
import dbConnect from 'utils/mongo'

import Layout2 from '@/components/layout/Layout2'

function GetRandomItem({ product }) {
  const randomProducts = []
  for (let i = 0; i < 4; i++) {
    if (i !== i - 1) {
      randomProducts.push(Math.floor(Math.random() * product.length))
    }
  }
  return (
    <>
      {randomProducts.map((r) => (
        <div key={product[r]._id} className="lg:col-3 md:col-6 mb-8 ">
          <Link href={`/cars/${product[r]._id}`} legacyBehavior>
            <a>
              <div className="bg-gray-200 p- rounded-xl">
                <Image
                  src={product[r].images[0].url}
                  alt="car"
                  width={338}
                  height={214}
                  className="w-full rounded-xl cars-img"
                />

                <div className="row justify-center p-4">
                  <div className="col-12">
                    <p className="text-xl font-semibold my-2 text-center">{`${product[r].mark} ${product[r].model} ${product[r].motor}`}</p>
                  </div>
                  <div className="col-6">
                    <div className="w-full inline-flex items-center"></div>
                  </div>
                  <div className="col-6">
                    <div className="w-full inline-flex items-center justify-end"></div>
                  </div>
                  <div className="col-6 mt-5 text-center">
                    <p className="font-bold text-xl">
                      {product[r].price.toLocaleString('en-US')} €
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  )
}
export default function Car({ car, products }) {
  const images = []
  for (let i = 0; i < car.images.length; i++) {
    images.push({ original: car.images[i].url, thumbnail: car.images[i].url })
  }

  return (
    <Layout2>
      <div className="container">
        <div className="row my-5">
          <div className="md:col-8">
            <ReactImageGallery items={images} />
          </div>
          <div className="md:col-4 py-4">
            <h2 className="text-3xl mx-20">Përshkrimi</h2>
            {/* <div className="inline-flex items-center"></div> */}
            <div className="row mt-10 ml-6 text-lg ">
              <div className="col-6 space-y-2">
                <p>Marka:</p>
                <p>Modeli:</p>
                <p>Viti:</p>
                <p>Karburanti:</p>
                <p>Motori:</p>
                <p>Transmetuesi:</p>
                <p>Karike:</p>
                <p>KM:</p>
                <p>Ngjyra:</p>
              </div>
              <div className="col-6 space-y-2 font-bold capitalize">
                <p>{car.mark}</p>
                <p>{car.model} </p>
                <p>{car.year}</p>
                <p>{car.fueltype}</p>
                <p>{car.motor}</p>
                <p>{car.transmission}</p>
                <p>{car.chair}</p>
                <p>{car.km}</p>
                <p>{car.color}</p>
              </div>
              <div className="col-10 border-t-2 border-gray-900 mt-5">
                <p className="font-bold text-xl text-center mt-5">
                  {car.price.toLocaleString('en-US')} €
                </p>
              </div>
            </div>
            {/* Година: 2015 Марка: RENAULT Модел: CLIO Гориво: ДИЗЕЛ Мотор: 1.5dCi 90HP Кубикажа: 1461
            cm3 Коњски сили: 90 HP Менувач: Рачен Број на седишта: 2 Каросерија: HATCHBACK
            Километража: 145000 Надворешна боја: Бела Шифра: */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="text-2xl">Pajisjet extra</h2>
          </div>
          {car.extras.length < 10 ? (
            <div className="col-4">
              {car.extras.map((extra) => (
                <div key={extra} className="w-full inline-flex items-center">
                  <SVG src="/svg/tick.svg" className="w-5 h-5" />
                  <p className="ml-2">{extra}</p>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p>{car.extras[0]}</p>
            </>
          )}
          <div className="col-4">
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/tick.svg" className="w-5 h-5" />
              <p className="ml-2">Manual</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <p className="my-5 text-3xl font-bold">Te Sugjeruara</p>
          <GetRandomItem product={products} />
        </div>
      </div>
    </Layout2>
  )
}

export async function getServerSideProps({ params }) {
  try {
    await dbConnect()
    const res = await axios.get(`https://autoketa.mk/api/cars/${params.id}`)
    const cars = await axios.get('https://autoketa.mk/api/cars')
    return {
      props: {
        car: res.data,
        products: cars.data,
      },
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {
      notFound: true,
    }
  }
}
