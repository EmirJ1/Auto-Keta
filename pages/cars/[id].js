import axios from 'axios'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import SVG from 'react-inlinesvg'
import dbConnect from 'utils/mongo'

import Layout from '@/components/layout/Layout'

const images = [
  // {
  //   original: '/images/golf7.jpg',
  //   thumbnail: '/images/golf7.jpg',
  // },
  // {
  //   original: 'https://picsum.photos/id/1015/1000/600/',
  //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
  // },
  // {
  //   original: 'https://picsum.photos/id/1019/1000/600/',
  //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
  // },
  // {
  //   original: 'https://picsum.photos/id/1018/1000/600/',
  //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
  // },
  // {
  //   original: 'https://picsum.photos/id/1015/1000/600/',
  //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
  // },
  // {
  //   original: 'https://picsum.photos/id/1019/1000/600/',
  //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
  // },
  // {
  //   original: 'https://picsum.photos/id/1018/1000/600/',
  //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
  // },
  // {
  //   original: 'https://picsum.photos/id/1015/1000/600/',
  //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
  // },
  // {
  //   original: 'https://picsum.photos/id/1019/1000/600/',
  //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
  // },
]

export default function Car({ car }) {
  for (let i = 0; i < car.images.length; i++) {
    images.push({ original: car.images[i].url, thumbnail: car.images[i].url })
  }
  return (
    <Layout>
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
                <p>{car.model} VII</p>
                <p>{car.year}</p>
                <p>{car.fueltype}</p>
                <p>1.6TDI</p>
                <p>{car.transmission}</p>
                <p>5</p>
                <p>{car.km}</p>
                <p>E Zezë</p>
              </div>
              <div className="col-10 border-t-2 border-gray-900 mt-5">
                <p className="font-bold text-xl text-center mt-5">14,000 €</p>
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
          <div className="col-4">
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/tick.svg" className="w-5 h-5" />
              <p className="ml-2">Manual</p>
            </div>
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/tick.svg" className="w-5 h-5" />
              <p className="ml-2">Manual</p>
            </div>
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/tick.svg" className="w-5 h-5" />
              <p className="ml-2">Manual</p>
            </div>
          </div>
          <div className="col-4">
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/tick.svg" className="w-5 h-5" />
              <p className="ml-2">Manual</p>
            </div>
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/tick.svg" className="w-5 h-5" />
              <p className="ml-2">Manual</p>
            </div>
            <div className="w-full inline-flex items-center">
              <SVG src="/svg/tick.svg" className="w-5 h-5" />
              <p className="ml-2">Manual</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  try {
    await dbConnect()
    const res = await axios.get(`https://auto.keta.mk/api/cars/${params.id}`)
    return {
      props: {
        car: res.data,
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
