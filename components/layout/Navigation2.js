import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link href={href} legacyBehavior>
        <a className="block text-white py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent">
          {children}
        </a>
      </Link>
    </li>
  )
}

export default function Navigation2() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="sticky w-full top-0 left-0 bg-black" style={{ zIndex: '9999' }}>
      <div className="container">
        <div className="row py-6 justify-between items-center">
          <div className="col-6">
            <Link href="/">
              <p className="text-white uppercase text-xl font-bold">Auto Keta</p>
            </Link>
          </div>
          <div className="col-2 md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className={`fill-current text-white w-6 h-6`}
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-6 md:flex justify-center md:justify-end bg-black ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">Cars</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
