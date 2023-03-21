import axios from 'axios'

import CarsSection from '@/components/sections/CarsSection'
import HeaderSection from '@/components/sections/HeaderSection'
import Layout from '@/layout/Layout'

export default function Home({ cars }) {
  return (
    <Layout title="Home">
      {/* Header Section Example */}
      <HeaderSection />
      {/* Cars Section */}
      <CarsSection cars={cars} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const carsProd = await axios.get('http://localhost:3000/api/cars')
  return {
    props: {
      cars: carsProd.data,
    },
  }
}
