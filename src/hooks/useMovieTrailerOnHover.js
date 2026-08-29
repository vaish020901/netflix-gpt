import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailerOnHover = (movieId, isHovered) => {
  const [trailerVideo, setTrailerVideo] = useState(null);

  useEffect(() => {
    if (!isHovered || !movieId) return;

    const getMovieTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );

      const json = await data.json();

      const trailer = json.results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer"
      );

      setTrailerVideo(trailer);
    };

    getMovieTrailer();
  }, [movieId, isHovered]);

  return trailerVideo;
};

export default useMovieTrailerOnHover;