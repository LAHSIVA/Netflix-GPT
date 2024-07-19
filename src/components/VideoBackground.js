import React from 'react'

import { useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({movieId}) => {

  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
  useTrailerVideo(movieId);

  return (
    <div><iframe  src={"https://www.youtube.com/embed/"+trailerVideo?.key} 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground