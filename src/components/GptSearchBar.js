import React from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openapi from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {

  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
    
  const searchText = useRef(null);

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movieName.trim()) +
        "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
    );
    const json = await data.json();
    const exactMatch = json.results.filter(
            (movie) =>
            movie.title?.trim().toLowerCase() === movieName.trim().toLowerCase()
    );

        return exactMatch;
  };

  const handleGptSearchClick = async () => {

    console.log(searchText.current.value);

    const gptQuery = "Act as a Moview Recommendation System and suggets some movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Ramayan, Sholay, Dhurandhar, Article 370, Kasmir Files"

    const gptResults = await openapi.chat.completions.create({
        model: 'gpt-5.5',
        messages: [
            { role: 'user', content: gptQuery }
        ],
    });

    if(!gptResults.choices) {
        // error handling
    }

    const gptMovies = gptResults.choices[0]?.message?.content.split(",").map((movie) => movie.trim());;
    
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    // This will return 5 promises not data

    const tmdbResults = await Promise.all(promiseArray); 
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  }

  return (
    <div className="flex justify-center px-4">
      <form className="flex w-full max-w-2xl gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className=" flex-1 rounded-md bg-white px-5 py-4 text-lg text-black shadow-lg outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-600"
          placeholder={language[langKey].gptSearchPlaceholder}
        />

        <button
          type="submit"
          onClick={handleGptSearchClick}
          className="rounded-md bg-red-600 px-7 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
