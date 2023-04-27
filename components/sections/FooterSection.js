import Image from 'next/image'

export default function FooterSection() {
  return (
    <div className="bg-white">
      <div className="container py-14">
        <div className="row">
          <div className="lg:col-4 order-last lg:order-none mt-5 lg:mt-0">
            <Image
              src="/images/logo.png"
              width={137}
              height={123}
              className="w-auto h-32"
              alt="logo"
            />
            <p className="mt-5">&copy; 2023 , Auto Keta - All rights reservered</p>
          </div>
          <div className="lg:col-4 md:col-6">
            <h3 className="text-2xl text-black">Contact</h3>
            <p className="mt-9 text-gray-800">Ilindenska 209 , Gostivar , 1230 , North Macedonia</p>
            <a href="tel:+389 70378342"><p className="mt-5 text-gray-800">T. +389 70 378 342</p></a>
            <p className="mt-5 text-gray-800">E. autoketa@hotmail.com</p>
          </div>
          <div className="lg:col-3 md:col-6 lg:offset-1 offset-0 mt-5 md:mt-0">
            <h3 className="text-2xl text-black">Follow Us</h3>
            <a
              href="https://www.facebook.com/autoketa/"
              target="_blank"
              rel="noreferrer"
              className="block mt-9 ml-8 text-gray-800 hover:bg-blue-700 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/autoketa1/"
              target="_blank"
              rel="norefferer noreferrer"
              className="block mt-5 ml-8 text-gray-800"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
