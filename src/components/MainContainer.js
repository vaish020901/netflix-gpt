import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle.js'
import VideoBackground from './VideoBackground.js'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies || movies.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * movies.length);
    const mainMovie = movies[4];
    
    return (
        <div className="relative">
            <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
            <VideoBackground movieId={mainMovie.id} />
        </div>
    )
}

export default MainContainer