import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Layout2 from '@/components/layout/Layout2'

export default function Success() {
  return (
    <Layout2 title="Form Success">
      <div className="container">
        <div className="row h-screen text-center items-center">
          <div className="col-12">
            <Image
              src="/images/tick-img.png"
              width={300}
              height={300}
              alt="tick-image"
              className="mx-auto"
            />
            <h1 className="mt-7 text-5xl font-bold">Form successfully submitted!</h1>
            <Link legacyBehavior href="/">
              <a className="uppercase inline-block mt-7 px-10 py-5 bg-black hover:bg-white hover:text-black border border-transparent hover:border-black text-white rounded-b-3xl transition-all ease-in-out duration-500">
                Back To Page
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout2>
  )
}
