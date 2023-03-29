import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href, className }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link href={href} legacyBehavior>
        <a
          className={`block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent ${className}
          `}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <div
      className={`fixed w-full top-0 left-0 ${color ? 'bg-black ' : 'bg-black md:bg-transparent'}`}
      style={{ zIndex: '9999' }}
    >
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
                className={`fill-current ${color ? 'text-white' : 'text-white'} w-6 h-6`}
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-6 md:flex justify-center md:justify-end bg-black md:bg-transparent ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem
                href="/"
                className={`${color ? 'text-white ' : 'text-white md:text-white'} `}
              >
                Home
              </NavItem>
              <NavItem
                href="/cars"
                className={`${color ? 'text-white' : 'text-white md:text-white'} `}
              >
                Cars
              </NavItem>
              <NavItem
                href="/contact"
                className={`${color ? 'text-white' : 'text-white md:text-white'} `}
              >
                Contact
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
