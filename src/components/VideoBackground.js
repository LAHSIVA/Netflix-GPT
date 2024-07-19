import React, { useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'
import {addTrailerVideo} from '../utils/MoviesSlice'
import { useDispatch, useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {

  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

  const dispatch = useDispatch()

    // Fetch Trailer Video 

    const getMovieVideos= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', API_OPTIONS)
        const json= await data.json();
        console.log(json);

        const multitrailer=json.results.filter(video=>video.type==='Trailer');
        const trailer= multitrailer.length? multitrailer[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
        getMovieVideos();
    },[])
  return (
    <div><iframe  src={"https://www.youtube.com/embed/"+trailerVideo?.key} 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground