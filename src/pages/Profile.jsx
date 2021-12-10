import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductP from '../components/Product/ProductP'
import MainProfile from '../components/Main/MainProfile'
import Footer from '../components/Footer/Footer'

function Profile() {
  return (
    <>
      <Navbar />
      <MainProfile />
      <ProductP />
      <Footer />
    </>
  )
}

export default Profile
