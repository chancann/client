import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import makanan from '../../assets/image/makanan.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Product() {
  const [isOpen, setIsOpen] = useState(false)
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (

    <main className='w-7/7 min-h-screen1 m-auto font-poppins text-purple-2'>
      <div>

        <div className='text-center'>
          <h2 className='p-4 font-bold text-4xl text-purple-1'>Produk</h2>
        </div>

        <div className='flex mb-6'>
          <div className="w-full relative">
            <div className='flex justify-end'>
              <div className=''>
                <NavLink exact to='/' className='flex p-2 justify-center hover:bg-gray-50'>Semua</NavLink>
              </div>
              <div className=''>
                <button onClick={() => { setIsOpen(!isOpen) }} type="button" className="p-2 inline-flex items-center hover:bg-gray-50 focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Kategori
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
              <div className="py-1" role="none">

                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Makanan
                </a>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Minuman
                </a>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Pakaian
                </a>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Kerajinan Tangan
                </a>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Perawatan Tubuh
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <Slider {...settings} className='p-2'>
          <div className=''>
            <div className="p-4 hover:shadow-md">
              <figure className='rounded'>
                <img className="w-full rounded object-cover" src={makanan} alt="makanan" />
              </figure>
              <div className="p-4">
                <h4 className="text-xs font-medium text-right mb-1 text-gray-2">25 Desember 2021</h4>
                <h2 className="text-lg text-purple-2 text-center font-semibold mb-2">Ayam Goreng Mentah</h2>
                <h3 className='text-sm text-center mb-1 text-gray-1'>Penjual</h3>
                <h4 className='text-sm text-red-1 text-center font-medium mb-3'>Rp. 20.000</h4>
                <div className="flex items-center flex-wrap justify-end">
                  <NavLink to="/detail">
                    <button to='/detail' className="text-indigo-300 inline-flex items-center text-gray-1">
                      Detail
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className=''>
            <div className="p-4 hover:shadow-md">
              <figure className='rounded'>
                <img className="w-full rounded object-cover" src={makanan} alt="makanan" />
              </figure>
              <div className="p-4">
                <h4 className="text-xs font-medium text-right mb-1 text-gray-2">25 Desember 2021</h4>
                <h2 className="text-lg text-purple-2 text-center font-semibold mb-2">Ayam Goreng Mentah</h2>
                <h3 className='text-sm text-center mb-1 text-gray-1'>Penjual</h3>
                <h4 className='text-sm text-red-1 text-center font-medium mb-3'>Rp. 20.000</h4>
                <div className="flex items-center flex-wrap justify-end">
                  <NavLink to="/detail">
                    <button to='/detail' className="text-indigo-300 inline-flex items-center text-gray-1">
                      Detail
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className=''>
            <div className="p-4 hover:shadow-md">
              <figure className='rounded'>
                <img className="w-full rounded object-cover" src={makanan} alt="makanan" />
              </figure>
              <div className="p-4">
                <h4 className="text-xs font-medium text-right mb-1 text-gray-2">25 Desember 2021</h4>
                <h2 className="text-lg text-purple-2 text-center font-semibold mb-2">Ayam Goreng Mentah</h2>
                <h3 className='text-sm text-center mb-1 text-gray-1'>Penjual</h3>
                <h4 className='text-sm text-red-1 text-center font-medium mb-3'>Rp. 20.000</h4>
                <div className="flex items-center flex-wrap justify-end">
                  <NavLink to="/detail">
                    <button to='/detail' className="text-indigo-300 inline-flex items-center text-gray-1">
                      Detail
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className=''>
            <div className="p-4 hover:shadow-md">
              <figure className='rounded'>
                <img className="w-full rounded object-cover" src={makanan} alt="makanan" />
              </figure>
              <div className="p-4">
                <h4 className="text-xs font-medium text-right mb-1 text-gray-2">25 Desember 2021</h4>
                <h2 className="text-lg text-purple-2 text-center font-semibold mb-2">Ayam Goreng Mentah</h2>
                <h3 className='text-sm text-center mb-1 text-gray-1'>Penjual</h3>
                <h4 className='text-sm text-red-1 text-center font-medium mb-3'>Rp. 20.000</h4>
                <div className="flex items-center flex-wrap justify-end">
                  <NavLink to="/detail">
                    <button to='/detail' className="text-indigo-300 inline-flex items-center text-gray-1">
                      Detail
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>


        </Slider>

      </div>
    </main>
  )
}

export default Product
