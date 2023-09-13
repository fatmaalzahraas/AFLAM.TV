import React, { useCallback, useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";
import axios, { images, API_KEY } from "../api";
import { MdFavorite } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import NoImage from "../assets/no-image01.jpg";
import NotFound from "../assets/no-image02.jfif";
import MoviesTrailor from "../components/MoviesTrailor";
import Preloader from "../components/Preloader";
import SavedMovie from "../components/SavedMovie";
import useFavoriteMovie from "../custom-hooks/useFavoriteMovie";
const MovieDetails = () => {
  const { like, myFavorites } = SavedMovie();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const { id } = useParams();
  const {favoriteMovie} = useFavoriteMovie(movie)
  const fetchMovie = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      setMovie(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, [id]);
  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageTitle title={movie.title}>
      {loading ? (
        <Preloader
          styles="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          heightView="h-screen"
        />
      ) : (
        <>
          {movie ? (
            <div className="min-h-screen  relative w-full bg-lightColor dark:bg-darkBlue/95">
              <img
                className="hidden md:block w-full h-full object-cover absolute z-[1] "
                src={
                  movie.backdrop_path
                    ? `${images}original/${movie?.backdrop_path}`
                    : NotFound
                }
                alt={movie?.title}
              />
              <div className="hidden md:block w-full h-full bg-darkBlue/50 dark:bg-darkBlue/70 top-0 left-0 z-[3] absolute"></div>
              <div className="w-full lg:w-[80%] xl:w-[70%] 2xl:w-[60%] md:absolute md:top-[50%] md:translate-y-[-50%] md:left-[20px] lg:left-[50px] xl:left-[90px] px-[1rem] py-[2.3rem] md:py-0 lg:py-[1.5rem] z-[5] flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:gap-x-[1.7rem]">
                <div className="lg:basis-[35%] xl:basis-[37%] md:basis-[40%] w-[45%] xxs:w-[55%]">
                  <img
                    className="w-full"
                    src={
                      movie.poster_path
                        ? `${images}original/${movie?.poster_path}`
                        : NoImage
                    }
                    alt={movie?.title}
                  />
                </div>
                <div className="basis-0 md:basis-[66%] lg:basis-[65%] xl:basis-[63%] flex flex-col items-start xs:items-center md:items-center lg:items-start mt-[1.5rem] lg:mt-0 px-[0.8rem]">
                  <h2 className="text-switchMode font-bold text-[1.4rem] md:text-[1.6rem] mb-[0.7rem]">
                    {movie?.title}
                  </h2>
                  {movie?.genres && (
                    <div className="flex gap-x-[0.4rem] mb-[0.2rem]">
                      {movie.genres.length > 0 && (
                        <span className="text-switchMode font-semibold text-[1rem] md:text-[1.1rem]">
                          Genre:{" "}
                        </span>
                      )}
                      <p className="md:text-lightColor dark:text-lightColor text-darkBlue font-medium text-[1rem]">
                        {movie.genres.length > 0 &&
                          movie.genres
                            .map((genre) => genre?.name)
                            .reduce((acc, cur) => acc + " , " + cur)}
                      </p>
                    </div>
                  )}
                  {movie?.spoken_languages && (
                    <p className="flex gap-x-[0.4rem] mb-[0.2rem]">
                      {movie.spoken_languages.length > 0 && (
                        <span className="text-switchMode font-semibold text-[1rem] md:text-[1.1rem]">
                          Language:{" "}
                        </span>
                      )}
                      <span className="md:text-lightColor dark:text-lightColor text-darkBlue font-medium text-[1rem]">
                        {movie.spoken_languages.length > 0 &&
                          movie.spoken_languages
                            .map((lg) => lg.name)
                            .reduce((acc, cur) => acc + " , " + cur)}
                      </span>
                    </p>
                  )}
                  {movie?.release_date && (
                    <p className="flex gap-x-[0.4rem] mb-[0.2rem]">
                      <span className="text-switchMode font-semibold text-[1rem] md:text-[1.1rem]">
                        Screening Date:{" "}
                      </span>
                      <span className="md:text-lightColor dark:text-lightColor text-darkBlue font-medium text-[1rem]">
                        {movie?.release_date}
                      </span>
                    </p>
                  )}
                  {movie?.production_countries && (
                    <p className="flex xxs:gap-x-[0.1rem] gap-x-[0.4rem] mb-[0.2rem]">
                      {movie?.production_countries.length > 0 && (
                        <span className="text-switchMode font-semibold text-[1rem] md:text-[1.1rem] xxs:w-[50%]">
                          Producer Country:{" "}
                        </span>
                      )}
                      <span className="md:text-lightColor dark:text-lightColor text-darkBlue font-medium text-[1rem]">
                        {movie?.production_countries.length > 0 &&
                          movie.production_countries
                            .map((pc) => pc.name)
                            .reduce((acc, cur) => acc + " , " + cur)}
                      </span>
                    </p>
                  )}
                  <p className="text-switchMode font-semibold text-[1rem] md:text-[1.1rem] mb-[0.2rem]">
                    The Story:
                  </p>
                  <p className="md:text-lightColor dark:text-lightColor text-darkBlue font-medium text-[0.9rem] leading-[1.4rem] w-[90%] lg:w-[100%]">
                    {movie?.overview}
                  </p>
                  <div className="flex items-center gap-x-[0.8rem] mt-[1.3rem] lg:mt-[2rem] md:mt-[2.5rem] ">
                    <button
                      className="bg-main/75 text-lightColor hover:text-grayColor transition px-[3.5rem] py-2.5 text-[0.9rem] rounded"
                      onClick={() => setVisible(true)}
                    >
                      Watch
                    </button>
                    <i
                      className="bg-grayColor/50 text-[20px] w-9 h-9 p-[6px] cursor-pointer rounded flex items-center justify-center"
                      onClick={() => myFavorites(movie)}
                    >
                      <MdFavorite
                        className={
                          like || favoriteMovie
                            ? "text-main"
                            : "text-lightColor  hover:text-main/75  transition"
                        }
                      />
                    </i>
                  </div>
                </div>
              </div>
              {visible && (
                <div className="fixed w-full h-full top-0 left-0 bg-darkBlue/50 dark:bg-darkBlue/75 z-[30] pt-[3.5rem] px-[2.3rem]">
                  <div
                    className="cursor-pointer absolute right-2 md:right-3 lg:right-[35px] xl:right-[100px] 2xl:right-[200px]"
                    onClick={() => setVisible(false)}
                  >
                    <TfiClose className="text-lightColor text-[1.5rem] md:text-[2rem] " />
                  </div>
                  <div className="flex justify-center mt-[2rem] h-screen">
                    {visible && <MoviesTrailor movieTitle={movie?.title} />}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2>Sorry, This Movie does not exist.</h2>
            </div>
          )}
        </>
      )}
    </PageTitle>
  );
};

export default MovieDetails;
