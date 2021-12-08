import React from 'react'
import pojokumkm from '../../assets/image/pojokumkm.png'

function About() {
  return (
    <main className='w-7/7 min-h-main m-auto font-poppins text-purple-2'>
      <div className=''>
        <div className='text-center'>
          <h2 className='p-4 font-bold text-4xl'>Tentang</h2>
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
  )
}

export default About
