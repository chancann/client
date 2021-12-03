import React from 'react'
import heroS from '../../assets/image/heroS.svg'

function MainSignup() {
  return (
    <main className='w-6/7 min-h-main mx-auto font-poppins sm-android:mt-8 tablet:mt-0 tablet:flex'>
      {/* Image */}
      <div className='flex'>
        <figure className='m-auto w-w1 sm-tablet:w-w2'>
          <img src={heroS} alt="heroS" />
        </figure>
      </div>

      {/* SignUp */}
      <div className='flex mx-auto sm-android:mt-10 tablet:mt-0'>
        <div className='max-w-md m-auto'>
          <h3 className='text-center font-bold text-purple-2'>
            Selamat bergabung di
            <span className='text-xl font-extrabold text-purple-1'> POJOK UMKM.</span>
          </h3>

          {/* Form */}
          <div className='sm-tablet:flex sm-tablet:gap-x-20'>
            <form>
              <div className='text-sm text-purple-2 mt-10'>
                <label htmlFor='email'>NIK</label>
                <input
                  type='email'
                  id='email'
                  className={`w-full p-2 border rounded outline-none text-sm `}
                  placeholder='NIK'
                />
              </div>
              <div className='text-sm text-purple-2 mt-5'>
                <label htmlFor='password'>Nama Lengkap</label>
                <input
                  type='password'
                  id='password'
                  className={`w-full p-2 border rounded outline-none text-sm`}
                  placeholder='Nama Lengkap'
                />
              </div>
              <div className='text-sm text-purple-2 mt-5'>
                <label htmlFor='email'>No Hp</label>
                <input
                  type='email'
                  id='email'
                  className={`w-full p-2 border rounded outline-none text-sm `}
                  placeholder='No Hp'
                />
              </div>
              <div className='text-sm text-purple-2 mt-5'>
                <label htmlFor='password'>Alamat</label>
                <input
                  type='password'
                  id='password'
                  className={`w-full p-2 border rounded outline-none text-sm`}
                  placeholder='Alamat'
                />
              </div>
            </form>

            <form>
              <div className='text-sm text-purple-2 mt-5 sm-tablet:mt-10'>
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
              <div className='text-sm text-purple-2 mt-5'>
                <label htmlFor='password'>Konfirmasi Kata Sandi</label>
                <input
                  type='password'
                  id='password'
                  className={`w-full p-2 border rounded outline-none text-sm`}
                  placeholder='Konfirmasi Kata Sandi'
                />
              </div>

              {/* Checkbox */}
              <div className='text-sm text-purple-2 mt-5 gap-y-2'>
                <label htmlFor=''>Jenis Kelamin</label>
                <div className='mt-1 px-2'>
                  <input type='checkbox' id='checkbox' />
                  <label htmlFor='' className='px-2'> Laki-laki</label>
                </div>
                <div className='px-2'>
                  <input type='checkbox' id='checkbox' />
                  <label htmlFor='' className='px-2'> Perempuan</label>
                </div>      
              </div>
            </form>
          </div>

          {/* Button */}
          <div>
            <div className='text-center'>
              <button type='submit' className={`w-6/12 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded mt-8`}>
                Daftar
              </button>
            </div>

            <div>
              <p className='font-semibold text-center text-xs text-purple-2 mt-6'>
                Sudah punya akun? <a className='text-purple-1' href="/">Masuk Disini</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainSignup
