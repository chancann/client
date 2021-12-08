import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'
import Product from '../components/Product/Product'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'


function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product/>
      <About/>
      <Footer />
    </>
  )
}

export default Home
