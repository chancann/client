import React from 'react'
import heroL from '../../assets/image/heroL.svg'
import { NavLink } from 'react-router-dom'

function MainLogin() {
  return (
    <main className='w-6/7 min-h-main mx-auto font-poppins mt-8 sm-tablet:mt-0 tablet:flex'>
      {/* Image */}
      <div className='flex'>
        <figure className='m-auto max-w-mw-1 sm-tablet:max-w-mw-2 mid-tablet:max-w-mw-3'>
          <img src={heroL} alt="heroL" />
        </figure>
      </div>

      {/* Form Login */}
      <div className='flex mx-auto mt-10 tablet:mt-0'>
        <div className='max-w-md m-auto'>
          <h3 className='text-center font-bold text-purple-2'>
            Selamat datang di
            <span className='text-xl font-extrabold text-purple-1'> POJOK UMKM.</span>
          </h3>

          <form>
            <div className='text-sm text-purple-2 mt-10'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                className={`w-full p-2 border rounded outline-none text-sm `}
                placeholder='Email'
              />
            </div>
            <div className='text-sm text-purple-2 mt-5'>
              <label htmlFor='password'>Kata Sandi</label>
              <input
                type='password'
                id='password'
                className={`w-full p-2 border rounded outline-none text-sm`}
                placeholder='Kata Sandi'
              />
            </div>

            <div className='text-purple-2 font-semibold text-xs text-right mt-6'>
              <NavLink exact to="/forgotpassword">Lupa Kata Sandi?</NavLink>
            </div>

            {/* Button */}
            <div className='text-center'>
              <button type='submit' className={`w-full p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded mt-6`}>
                Masuk
              </button>
            </div>

            <div>
              <p className='font-semibold text-center text-xs text-purple-2 mt-6'>
                Belum punya akun? <NavLink className='text-purple-1' exact to="/register">Daftar Disini</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>



  )
}

export default MainLogin
