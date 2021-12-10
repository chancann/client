import React from 'react'
import { NavLink } from 'react-router-dom'
import heroDetail from '../../assets/image/ilustrations/heroDetail.svg'

function MainProfile() {
  return (
    <main className='w-7/7 min-h-screen m-auto font-poppins'>
      <div className='p-2 sm-tablet:my-auto'>
        <div className='text-center mb-4'>
          <h2 className='text-4xl font-bold text-purple-1'>Profil</h2>
        </div>
        <div>
          <div>
            <figure className='flex justify-center mb-4'>
              <img src={heroDetail} alt="heroDetail" />
            </figure>
            <div className='text-center mb-4'>
              <button type='submit' className={`w-40 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
                Unggah Foto
              </button>
            </div>
          </div>

          <div className='text-purple-2 font-medium mb-6'>
            <div className='mb-2'>
              <div>
                <label htmlFor="name">Nama</label>
              </div>
              <div>
                <p className='text-gray-2 text-sm'>Chancan Yadi</p>
              </div>
            </div>
            <div className='mb-2'>
              <div>
                <label htmlFor="nohp">No Hp</label>
              </div>
              <div>
                <p className='text-gray-2 text-sm'>08xxxxxxxxxx</p>
              </div>
            </div>
            <div className='mb-2'>
              <div>
                <label htmlFor="address">Alamat</label>
              </div>
              <div>
                <p className='text-gray-2 text-sm'>Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia</p>
              </div>
            </div>
          </div>

          <div className='flex justify-center gap-x-4'>
            <div className='mb-4'>
              <button type='submit' className={`w-36 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
                Ubah
              </button>
            </div>
            <NavLink to='/tambah-produk'>
              <div className='mb-4'>
                <button type='submit' className={`w-36 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
                  Tambah Produk
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainProfile
