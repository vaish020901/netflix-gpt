import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 flex-shrink-0 pr-4 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-4 hover:z-10">
      <img className="w-full" alt="Movie Card" src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard