import React from 'react'
import makanan1 from '../../assets/image/makanan1.png'

function MainDetail() {
  return (
    <main className='w-7/7 flex min-h-main mt-4 m-auto font-poppins'>
        <div className='m-auto p-2 tablet:flex gap-x-5'>

          <div className='mb-4'>
            <figure className='max-w-mw-2 sm-tablet:w-80'>
              <img src={makanan1} alt="makanan1" className='rounded' />
            </figure>
          </div>

          <div className=''>
            <h2 className='mb-2 text-purple-1 text-lg font-bold'>Makanan</h2>

            <h3 className='mb-2 text-purple-2 text-xl font-bold'>Ayam Goreng Mentah</h3>

            <h4 className='mb-2 text-gray-1 font-medium'>Penjual</h4>

            <h5 className='mb-2 text-gray-2 text-sm'>Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia</h5>

            <h6 className='mb-2 text-gray-2 text-sm sm-laptop:w-3/4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h6>

            <h3 className='mb-2 text-lg font-semibold text-purple-2'>
              Harga:
              <p className='font-medium text-red-1'>Rp. 20.000</p>
            </h3>

            <button type='submit' className={`w-40 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
              Hubungi Penjual
            </button>
          </div>

        </div>
      </main>
  )
}

export default MainDetail
