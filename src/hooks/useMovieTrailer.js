import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice.js";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo)

    const getMovieVideo = async () => {
        const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS,
        );
        const json = await data.json();
        const trailer = json.results.find((video) => video.type == "Trailer" );
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        if(!trailerVideo)
        getMovieVideo();
    }, []);

};

export default useMovieTrailer;