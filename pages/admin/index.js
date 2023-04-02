//Home i adminitt
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useState } from 'react'

import Add from '@/components/Add'
import Layout2 from '@/components/layout/Layout2'
import Pagination from '@/components/Pagination'
export default function index({ cars }) {
  const [add, setAdd] = useState(true)
  return (
    <Layout2 title="Admin">
      {/* {console.log(cars)} */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-end">
            <button
              onClick={() => setAdd(false)}
              className="px-5 py-3 text-end bg-green-500 text-white rounded-md my-4"
            >
              Add
            </button>
          </div>
          <div className="col-12">{!add && <Add setAdd={setAdd} />}</div>
          <Pagination cars={cars} />
        </div>
      </div>
    </Layout2>
  )
}

export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || ''

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }
  const carsProd = await axios.get('https://autoketa.mk/api/cars')
  return {
    props: {
      cars: carsProd.data,
    },
  }
}
