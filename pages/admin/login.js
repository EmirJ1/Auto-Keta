//Pjesa e Loginit
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Button from '@/components/Button'
import Layout2 from '@/components/layout/Layout2'

export default function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  const router = useRouter()

  async function handleClick() {
    try {
      await axios.post('https://autoketa.mk/api/login', {
        username,
        password,
      })
      router.push('/admin/')
    } catch (err) {
      setError(true)
    }
  }
  return (
    <Layout2 title="Login">
      <div className="container">
        <div className="row md:my-20 justify-center">
          <div className="lg:col-6 bg-gray-400 text-center rounded-xl py-5">
            <Image
              src="/images/emir.jpg"
              width={160}
              height={160}
              className="w-40 h-auto rounded-full mx-auto"
              alt="emir"
            />
            <input
              type="text"
              placeholder="Username"
              className="mt-5 rounded-xl px-8 py-6 w-4/5 placeholder:text-gray-500"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-xl px-8 py-6 mt-5 w-4/5 placeholder:text-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-3/4 mt-5" onClick={() => handleClick()}>
              Shtejpe
            </Button>
            {error ? <p className="mt-5">Hec be hupuuuu</p> : <p className="mt-5"></p>}
          </div>
        </div>
      </div>
    </Layout2>
  )
}
