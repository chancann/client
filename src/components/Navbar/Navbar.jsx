import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticatedUser } from '../../middleware'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const auth = useRecoilValue(authenticatedUser)

  return (
    <header className='w-7/7 mx-auto mt-6 font-poppins'>
      <div className='flex flex-col sm-tablet:flex-row'>
        <div className='flex items-center justify-between'>
          <div className='w-20'>
            <NavLink exact to="/" className='font-extrabold text-xl leading-4 text-purple-1'><h1>POJOK UMKM.</h1></NavLink>
          </div>
          <div>
            <button onClick={() => { setIsOpen(!isOpen) }} className='focus:outline-none block sm-tablet:hidden text-purple-1'>
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

          {auth.check ?
            <div className='flex sm-tablet:flex-row flex-col items-center border-t sm-tablet:border-t-0'>
              <NavLink exact to='/profil'>
                <div className='flex mt-4 sm-tablet:mt-0'>
                  <figure className=' flexborder'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </figure>
                  <div className='mx-2'>
                    {auth.user.name}
                  </div>
                </div>
              </NavLink>
              <div>
                <NavLink exact to='/'>
                  <button type='submit' className={`w-48 sm-tablet:w-28 mt-4 sm-tablet:mt-0 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
                    Keluar
                  </button>
                </NavLink>
              </div>
            </div>
            :
            <div className='my-2 sm-tablet:my-0'>
              <NavLink exact to='/masuk'>
                <button type='submit' className={`w-48 sm-tablet:w-28 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
                  Masuk
                </button>
              </NavLink>
            </div>
          }

        </div>
      </div>

    </header >
  )
}

export default Navbar
