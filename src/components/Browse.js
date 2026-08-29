import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js'
import SecondaryContainer from './SecondaryContainer.js'
import usePopularMovies from '../hooks/usePopularMovies.js'
import useTopRatedMovies from '../hooks/useTopRatedMovies.js'
import useUpcomingMovies from '../hooks/useUpcomingMovies.js'
import GptSearch from './GptSearch.js'
import { useSelector } from 'react-redux'

const Browse = () => {
  
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  {/*Fetch data from TMDB API -> Update store with the data -> Display the data in the UI*/}
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="overflow-x-hidden">
      <Header />
      {showGptSearch? <GptSearch  /> : ( <> <MainContainer /> <SecondaryContainer /> </>)}
    </div>
  )
}

export default Browse;