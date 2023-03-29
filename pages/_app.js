import '../styles/globals.css'

import { Jost } from 'next/font/google'
import { DefaultSeo } from 'next-seo'

const jost = Jost({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jost',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: '',
          site_name: 'Next Starter',
          description: 'Website description here',
        }}
      />
      <div className={`${jost.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
