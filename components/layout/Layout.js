//Per favicon logot
import dynamic from 'next/dynamic'
import Head from 'next/head'

import FooterSection from '../sections/FooterSection'

const Navigation = dynamic(() => import('@/components/layout/Navigation'), { ssr: false })

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title ? `${title} - Auto Keta` : 'Auto Keta'}</title>

        {/* Favicons */}
        <link rel="icon" href="/favicons/keta.ico" sizes="32x32" />
        <link rel="icon" href="/favicons/keta.ico" sizes="57x57" />
        <link rel="icon" href="/favicons/keta.ico" sizes="76x76" />
        <link rel="icon" href="/favicons/keta.ico" sizes="96x96" />
        <link rel="icon" href="/favicons/keta.ico" sizes="128x128" />
        <link rel="icon" href="/favicons/keta.ico" sizes="192x192" />
        
        <link rel="icon" href="/favicons/keta.ico" sizes="228x228" />
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : ''}`}>
        {/* Navigation here */}
        <Navigation />

        {children}

        {/* Footer here */}
        <FooterSection />
      </div>
    </>
  )
}
