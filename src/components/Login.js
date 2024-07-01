import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg' 
                alt='Body'
            />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className=' font-bold text-3xl p-4'>Sign In</h1>
            <input
                type="text" 
                placeholder='Email Address' 
                className='p-4 my-2 w-full bg-slate-300 bg-opacity-10  rounded-lg border-2  border-neutral-50 border-opacity-25 '
            />
            <input 
                type="password" 
                placeholder='Password' 
                className='p-4 my-2 w-full bg-slate-300 bg-opacity-10 rounded-lg border-2  border-neutral-50 border-opacity-25'
            />
            <button 
                className='p-4 my-2 bg-red-700 w-full rounded-lg border-2  border-neutral-50 border-opacity-25'>Sign In
            </button>
            <p className='py-6'>New to Netflix? Sign Up Now</p>
            
        </form>
    </div>
  )
}

export default Login