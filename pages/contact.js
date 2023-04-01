import React from 'react'
import SVG from 'react-inlinesvg'

import Layout2 from '@/components/layout/Layout2'

export default function contact() {
  return (
    <Layout2 title="Contact">
      <div
        className="flex items-center"
        style={{
          background: `linear-gradient(0deg, rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.8)), url('./images/contact-bg.jpg') no-repeat center center / cover`,
          minHeight: '800px',
        }}
      >
        <div className="container">
          <div className="row justify-center items-center">
            <div className="md:col-6 mt-5 md:mt-0">
              <p className="border-l-2 pl-3 border-white text-white text-sm">Contact us</p>
              <h2 className="mt-6 text-4xl text-white font-semibold">Our Office</h2>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex items-center mt-9">
                  <SVG src="/svg/location.svg" className="fill-current w-10 h-10" />
                  <p className="text-white ml-5">
                    Ilindenska 209 , Gostivar , 1230 , North Macedonia
                  </p>
                </div>
                <div className="inline-flex items-center mt-9">
                  <SVG src="/svg/phone.svg" className="fill-current w-10 h-10" />
                  <p className="text-white ml-5">+389 70 378 342</p>
                </div>
                <div className="inline-flex items-center mt-9">
                  <SVG src="/svg/mail.svg" className="fill-current w-10 h-10" />
                  <p className="text-white ml-5">autoketa@hotmail.com</p>
                </div>
              </div>
            </div>
            <div className="md:col-5 my-8 md:my-0 py-5">
              <h2 className="text-4xl font-semibold text-white">Send a request</h2>
              <form name="contact" action="/success" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="mt-5 py-2 pl-4 w-full border border-white bg-transparent text-white rounded-sm placeholder-gray-400"
                />
                <input
                  type="text"
                  name="EMail"
                  placeholder="E-Mail"
                  className="py-2 pl-4 w-full border rounded-sm bg-transparent border-white text-white placeholder-gray-400 mt-5"
                />
                <input
                  type="text"
                  name="PhoneNr"
                  placeholder="Phone Number"
                  className="py-2 pl-4 w-full border rounded-sm border-white bg-transparent text-white placeholder-gray-400 mt-5"
                />
                <textarea
                  name="message"
                  placeholder="Message:"
                  cols="30"
                  rows="10"
                  className="w-full py-2 pl-4 border border-white bg-transparent text-white rounded-sm mt-5"
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="uppercase mt-5 px-10 py-5 bg-black hover:bg-white hover:text-black border border-transparent hover:border-black text-white rounded-b-3xl transition-all ease-in-out duration-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  )
}
