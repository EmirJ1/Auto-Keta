import CarsSection from '@/components/sections/CarsSection'
import HeaderSection from '@/components/sections/HeaderSection'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Header Section Example */}
      <HeaderSection />
      {/* Cars Section */}
      <CarsSection />
    </Layout>
  )
}
