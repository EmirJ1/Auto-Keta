import React from 'react'
import ReactImageGallery from 'react-image-gallery'

import Layout from '@/components/layout/Layout'

const images = [
  {
    original: './images/golf7.jpg',
    thumbnail: './images/golf7.jpg',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]
export default function index() {
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
            <div className="row mt-10 ml-6 text-lg justify-center">
              <div className="col-6 space-y-2">
                <p>Viti</p>
                <p>Marka</p>
                <p>Modeli</p>
                <p>Karburanti</p>
                <p>Motori</p>
                <p>Transmetuesi</p>
                <p>Numri i karikeve</p>
                <p>KM</p>
                <p>Ngjyra</p>
              </div>
              <div className="col-6 space-y-2 font-bold">
                <p>2019</p>
                <p>VW</p>
                <p>304</p>
                <p>Dizel</p>
                <p>1.5dCi 90HP</p>
                <p>Manual</p>
                <p>4</p>
                <p>15000</p>
                <p>E Bardhë</p>
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
        </div>
      </div>
    </Layout>
  )
}
