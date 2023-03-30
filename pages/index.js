import axios from 'axios'

import CarsSection from '@/components/sections/CarsSection'
import HeaderSection from '@/components/sections/HeaderSection'
import Layout from '@/layout/Layout'

export default function Home({ cars }) {
  return (
    <Layout title="Cars">
      {/* Header Section Example */}
      <HeaderSection />
      {/* Cars Section */}
      <CarsSection cars={cars} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const carsProd = await axios.get('https://auto.keta.mk/api/cars')
  return {
    props: {
      cars: carsProd.data,
    },
  }
}
