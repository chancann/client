import React from 'react'
import { NavLink } from 'react-router-dom'


function MainFP() {
  return (
    <main className='w-6/7 flex min-h-main m-auto font-poppins'>
      <div className='m-auto'>
        <div className='m-auto'>
          <h3 className='text-center font-bold text-purple-2'>
            Selamat datang di
            <span className='text-xl font-extrabold text-purple-1'> POJOK UMKM.</span>
            <p className='text-sm font-medium p-2'>Lupa Kata Sandi?</p>
          </h3>

          <form>
            <div className='text-sm text-purple-2 mt-8'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                className={`w-full p-2 border rounded outline-none text-sm `}
                placeholder='Email'
              />
            </div>

            {/* Button */}
            <NavLink to='/ubah-kata-sandi'>
              <div className='text-center mt-5'>
                <button type='submit' className={`w-full p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded mt-6`}>
                  Kirim Verifikasi
                </button>
              </div>
            </NavLink>

          </form>
        </div>
      </div>
    </main>
  )
}

export default MainFP
