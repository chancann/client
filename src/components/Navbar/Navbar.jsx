import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='w-7/7 mx-auto mt-6 font-poppins'>
      <div className='flex flex-col sm-tablet:flex-row'>
        <div className='flex items-center justify-between'>
          <div className='w-20'>
            <NavLink exact to="/" className='font-extrabold text-xl leading-4 text-purple-1'><h1>POJOK UMKM.</h1></NavLink>
          </div>
          <div>
            <button onClick={() => {setIsOpen(!isOpen)}} className='focus:outline-none block sm-tablet:hidden text-purple-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full sm-tablet:flex flex-col sm-tablet:flex-row sm-tablet:items-center justify-between text-center text-purple-1 my-4 sm-tablet:my-0`}>
          <div className='flex flex-col sm-tablet:flex-row sm-tablet:mx-4 p-2'>
            <NavLink exact to="/" className='block hover:text-purple-2 sm-tablet:mx-4 my-2'>Beranda</NavLink>
            <NavLink exact to="/produk" className='block hover:text-purple-2 sm-tablet:mx-4 my-2'>Produk</NavLink>
            <NavLink exact to="/tentang" className='block hover:text-purple-2 sm-tablet:mx-4 my-2'>Tentang</NavLink>
          </div>
          <div className='my-2 sm-tablet:my-0'>
            <NavLink exact to='/login'>
            <button type='submit' className={`w-4/7 sm-tablet:w-28 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
              Masuk
            </button>
            </NavLink>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Navbar
