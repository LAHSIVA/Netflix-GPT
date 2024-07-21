import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector(store=> store.movies);
  return ( 
  <div>
    <MovieList title={"Now  Playing"} movies={movies.nowPlayingMovies}/>
    {
      /*
        Movielist -Popular
          MovieCard*n
        Movielist -Now Playing
        Movielist- Trending
        Movielist- Horror

      */
    }
  </div>
  );
}

export default SecondaryContainer;