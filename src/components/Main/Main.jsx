import React from 'react'
import heroMain from '../../assets/image/ilustrations/heroMain.svg'

function Main() {
  return (
    <main className='w-7/7 flex min-h-screen m-auto font-poppins text-purple-2'>
      <div className='m-auto'>
        <div className='m-auto text-center tablet:text-left'>
          <figure className='m-auto max-w-mw-3 tablet:hidden'>
            <img src={heroMain} alt="heroMain" />
          </figure>

          <div className='font-bold mt-10 text-2xl tablet:mt-0 tablet:text-4xl laptop:text-5xl mb-8 desktop:w-5/7'>
            <h2>Satu Langkah, Sukses Bersama...</h2>
          </div>
          <div className='font-normal text-base sm-tablet:text-lg mb-10 desktop:w-5/7'>
            <h6>Temukan Produk Lokal Terbaik dari Pojok UMKM Kecamatan Sepatan Kabupaten Tangerang</h6>
          </div>

          <div className='text-center tablet:text-left'>
            <a href='https://drive.google.com/file/d/12f9z7cLPHpJ_uB2jN77Biu3W38CMrB1j/view'>
              <button className='w-48 sm-tablet:w-5/12 p-2 mb-8 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2'>
                Katalog Produk
              </button>
            </a>
          </div>
        </div>
      </div>

      <figure className='m-auto hidden tablet:inline-block'>
        <img src={heroMain} alt="heroMain" />
      </figure>
    </main>
  )
}

export default Main
