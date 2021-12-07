import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'
import FooterMain from '../components/Footer/FooterMain'
import Product from '../components/Product/Product'

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product/>
      <FooterMain/>
    </>
  )
}

export default Home
