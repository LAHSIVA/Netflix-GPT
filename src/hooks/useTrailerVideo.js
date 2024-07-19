import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/MoviesSlice';
import { API_OPTIONS } from '../utils/constants';



const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch()

    // Fetch Trailer Video 

    const getMovieVideos= async ()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/" +
            movieId+
            "/videos?language=en-US", 
            API_OPTIONS)
        const json= await data.json();
        

        const multitrailer=json.results.filter(video=>video.type==='Trailer');
        const trailer= multitrailer.length? multitrailer[0] : json.results[0];
        
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useTrailerVideo