import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) return null;

  {/* Flatten all TMDB results into one array */}
  const movies = movieResults.flat();

  return (
    <div className="mt-6 px-8 pb-16 text-white">
      
      <h2 className="mt-20 mb-10 text-2xl font-bold tracking-tight text-white">
        ✨ Recommended for you
      </h2>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>

    </div>
  );
};

export default GptMovieSuggestions;