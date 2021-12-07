import React from 'react'
import heroLogin from '../../assets/image/ilustrations/heroLogin.svg'
import { NavLink } from 'react-router-dom'

function MainLogin() {
  return (
    <main className='w-7/7 flex m-auto flex-col min-h-main font-poppins'>
      {/* Image */}
      <div className='my-auto sm-tablet:flex sm-tablet:flex-row'>
        
          <figure className='m-auto max-w-mw-0 sm-tablet:max-w-mw1 tablet:max-w-mw-2'>
            <img src={heroLogin} alt="heroLogin" />
          </figure>
        

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
                <NavLink exact to="/lupa-kata-sandi">Lupa Kata Sandi?</NavLink>
              </div>

              {/* Button */}
              <div className='text-center'>
                <button type='submit' className={`w-full p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded mt-6`}>
                  Masuk
                </button>
              </div>

              <div>
                <p className='font-semibold text-center text-xs text-purple-2 mt-6'>
                  Belum punya akun? <NavLink className='text-purple-1' exact to="/daftar">Daftar Disini</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>



  )
}

export default MainLogin
