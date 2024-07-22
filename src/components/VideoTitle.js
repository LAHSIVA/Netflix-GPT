import React from 'react'
import { PLAYBUTTON } from '../utils/constants'

const VideoTitle = ({title,overview}) => {
  return <div className='w-screen aspect-video pt-[10%] px-20 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='py-9 text-start font-thin w-1/4'>{overview}</p>
    <div className=''>
        <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{PLAYBUTTON} Play </button>
        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-3">More Info</button>
    </div>
  </div>
  
}

export default VideoTitle



