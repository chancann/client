import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarLR() {
  return (
    <header className='w-7/7 mx-auto mt-9 font-poppins'>
      <div className='w-20'>
        <NavLink exact to="/" className='font-extrabold text-xl leading-4 text-purple-1'><h1>POJOK UMKM.</h1></NavLink>
      </div>
    </header>
  )
}

export default NavbarLR
