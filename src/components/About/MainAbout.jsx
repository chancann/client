import React from 'react'
import { NavLink } from 'react-router-dom'
import pojokumkm from '../../assets/image/pojokumkm.png'
import Footer from '../Footer/Footer'

function MainAbout() {
  return (
    <>
      <main className='w-7/7 min-h-screen m-auto mt-2 font-poppins text-purple-2'>
        <div className=''>
          <div className='text-center'>
            <div className='flex items-center justify-between'>
              <h2 className='p-4 font-bold text-4xl'>Tentang</h2>
              <NavLink to='/' className="inline-flex">
                Beranda
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </NavLink>
            </div>
          </div>

          <div className='tablet:flex tablet:justify-around mt-4'>
            <figure className='max-w-mw-1 tablet:max-w-mw-2 m-auto tablet:m-0 mb-2'>
              <img src={pojokumkm} alt="pojokumkm" className='rounded shadow-md' />
            </figure>
            <div className='tablet:w-3/5 m-auto tablet:m-0'>
              <p className='p-2 text-justify text-sm'>Kecamatan Sepatan merupakan salah satu wilayah pendukung perekonomian dan bagian Administrasi Pemerintah di Kabupaten Tangerang,  yang memiliki visi yaitu “Terwujudnya Masyarakat Sepatan  yang sejahtera, mandiri, berwawasan, wirausaha dan berorientasi agribisnis”.  Untuk mewujudkan misi tersebut terbentuklah Pojok Usaha Mikro Kecil Menengah (UMKM) Kecamatan Sepatan,  yang merupakan kegiatan perdagangan atau perniagaan,  yang pengelolaannya dilakukan oleh individu atau badan usaha. Pojok UMKM adalah wadah binaan bagi para pelaku UMKM di Kecamatan Sepatan Kabupaten Tangerang.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MainAbout
