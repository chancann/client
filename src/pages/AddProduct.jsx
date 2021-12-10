import React from 'react'
import heroAdd from '../assets/image/ilustrations/heroAdd.svg'
import Navbar from '../components/Navbar/Navbar'
import FooterMain from '../components/Footer/FooterMain'

function AddProduct() {
  return (
    <>
      <Navbar />
      <main className='w-7/7 min-h-main m-auto font-poppins text-purple-2'>
        <div className=''>
          <div className=''>
            <div className='text-center mb-6'>
              <h3 className='text-2xl sm-tablet:text-4xl font-bold text-purple-1'>
                Tambah Produk
              </h3>
            </div>

            <div className='android:flex justify-around'>
              <div className='mb-6'>
                <form action="">
                  <div className='text-sm text-purple-2 mb-4'>
                    <label htmlFor='namaproduk'>Nama Produk</label>
                    <input
                      type='namaproduk'
                      id='namaproduk'
                      className={`w-full p-2 border rounded outline-none text-sm `}
                      placeholder='Nama Produk'
                    />
                  </div>
                  <div className='text-sm text-purple-2 mb-4'>
                    <label htmlFor='harga'>Harga</label>
                    <input
                      type='text'
                      id='text'
                      className={`w-full p-2 border rounded outline-none text-sm `}
                      placeholder='Harga'
                    />
                  </div>
                  <div className='text-sm text-purple-2 mb-4'>
                    <label htmlFor='email'>Deskripsi</label>
                    <input
                      type='email'
                      id='email'
                      className={`w-full p-2 border rounded outline-none text-sm `}
                      placeholder='Deskripsi'
                    />
                  </div>

                </form>

                <div className='flex mt-6 items-center gap-x-5'>
                  <div>
                    <button type='submit' className={`p-1 text-white-1 bg-purple-1 border rounded`}>
                      <img src={heroAdd} alt="heroAdd" className='w-6 h-6' />
                    </button>
                  </div>
                  <div>
                    <p>Gambar.jpg</p>
                  </div>
                </div>
              </div>

              <div className=''>
                <div className=''>
                  <h2 className='mb-2 font-semibold'>
                    Kategori:
                  </h2>

                  <div className='mb-6 text-center'>
                    <ul>
                      <li>
                        <button className={`w-40 p-2 mb-2 font-medium text-sm border rounded hover:bg-purple-1`}>
                          Makanan
                        </button>
                      </li>
                      <li>
                        <button className={`w-40 p-2 mb-2 font-medium text-sm border rounded hover:bg-purple-1`}>
                          Minuman
                        </button>
                      </li>
                      <li>
                        <button className={`w-40 p-2 mb-2 font-medium text-sm border rounded hover:bg-purple-1`}>
                          Pakaian
                        </button>
                      </li>
                      <li>
                        <button className={`w-40 p-2 mb-2 font-medium text-sm border rounded hover:bg-purple-1`}>
                          Kerajinan Tangan
                        </button>
                      </li>
                      <li>
                        <button className={`w-40 p-2 mb-2 font-medium text-sm border rounded hover:bg-purple-1`}>
                          Perawatan Tubuh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <button type='submit' className={`w-1/2 sm-tablet:w-1/4 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
                Tambah Produk
              </button>
            </div>

          </div>
        </div>
      </main>
      <FooterMain />
    </>
  )
}

export default AddProduct
