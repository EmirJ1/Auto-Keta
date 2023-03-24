/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useState } from 'react'

import Add from '@/components/Add'
import Layout from '@/components/layout/Layout'
import Pagination from '@/components/Pagination'
export default function index({ cars }) {
  const [add, setAdd] = useState(true)
  return (
    <Layout title="Admin">
      {/* {console.log(cars)} */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button onClick={() => setAdd(false)}>Add</button>
            {!add && <Add setAdd={setAdd} />}
            {console.log(cars)}
            <Pagination cars={cars} />
          </div>
        </div>
      </div>
    </Layout>
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
  const carsProd = await axios.get('https://auto.keta.mk/api/cars')
  return {
    props: {
      cars: carsProd.data,
    },
  }
}
