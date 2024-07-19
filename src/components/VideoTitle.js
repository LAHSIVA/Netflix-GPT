import React from 'react'

const VideoTitle = ({title,overview}) => {
  return <div className='w-screen aspect-video pt-[14%] px-20 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='py-9 text-start font-thin w-1/4'>{overview}</p>
    <div className=''>
        <button className='bg-white text-black p-3 px-11 text-xl border-slate-900 rounded-lg animate-pulse hover:bg-opacity-80'>Play</button>
        <button className='mx-4 bg-gray-500 text-white p-3 px-11 text-xl  border-slate-900 bg-opacity-65 rounded-lg opacity-60 hover:animate-bounce'>More Info</button>
    </div>
  </div>
  
}

export default VideoTitle



