import React from 'react'
import hero from '../assets/hero.svg'

function MainLogin() {
  return (
    <main className='w-6/7 min-h-main mx-auto flex font-poppins'>
      {/* Hero Svg */}
      <div className='flex'>
        <figure className=' max-w-md m-auto'>
          <img src={hero} alt="hero" />
        </figure>
      </div>

      {/* Form Login */}
      <div className='flex mx-auto'>
        <div className='w-full max-w-md m-auto'>
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
              <a href="/">Lupa Kata Sandi?</a>
            </div>

            {/* Button */}
            <div>
              <button className={`w-full p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded mt-6`}>
                Login
              </button>
            </div>

            <div>
              <p className='font-semibold text-center text-xs text-purple-2 mt-6'>
                Belum punya akun? <a className='text-purple-1' href="/">Daftar Disini</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>



  )
}

export default MainLogin
