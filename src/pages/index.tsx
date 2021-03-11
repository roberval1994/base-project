import Head from 'next/head'
import React from 'react'


import Logo from '../assets/logo-full.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Logo />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}https://github.com/roberval1994/base-project.git

export default Home
