import React from 'react'
import { NavLink } from 'react-router-dom'

function NFound() {
  return (
    <div className='flex font-poppins w-screen h-screen'>
      <div className='flex flex-col items-center m-auto'>
        <h2 className="font-bold text-center text-6xl sm-tablet:text-8xl">404</h2>
        <h6 className="mb-2 font-semibold text-center text-lg sm-tablet:text-xl"><span className="font-bold">Oops!</span> Halaman tidak ditemukan</h6>
        <p className="mb-8 text-center text-sm sm-tablet:text-base">Halaman yang Anda cari tidak ada.</p>
        <div className="px-6 py-2 text-sm font-semibold bg-blue-100">
          <NavLink to="/">
            Beranda
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NFound
