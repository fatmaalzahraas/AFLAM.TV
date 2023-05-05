import { useEffect, useState } from "react";
import axios, { API_KEY, images } from "../api";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import Preloader from "./Preloader";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="w-full p-5 sm:p-4 md:p-7 lg:p-9 flex justify-items-center items-center bg-lightColor dark:bg-darkBlue transition-colors duration-[0.3s]">
        <Swiper
          className="w-full md:h-[300px] lg:h-[450px] h-56 rounded md:rounded-md"
          slidesPerView={1}
          direction={"vertical"}
          spaceBetween={0}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {loading ? (
            <Preloader styles="justify-center mt-[3rem]" />
          ) : (
            <>
              {movies?.map((movie) => {
                return (
                  <SwiperSlide key={movie.id} className="rounded md:rounded-md">
                    <div className="h-full">
                      <div className="absolute w-full h-full bg-darkColor opacity-50"></div>
                      <img
                        className="w-full h-full object-cover"
                        src={`${images}original/${movie?.backdrop_path}`}
                        alt={movie?.title}
                      />
                      <div className="absolute w-3/4 top-[35px] md:top-1/4 z-10 left-14 xxs:top-4 xxs:left-6">
                        <h2 className="text-lightColor text-xl md:text-2xl font-semibold mb-4 xxs:text-lg">
                          {movie?.title}
                        </h2>
                        <p className="text-lightColor mb-2 text-xs">
                          {movie?.release_date}
                        </p>
                        <p className="text-lightColor text-xs mb-7">
                          Rating: {movie?.vote_average}
                        </p>
                        <div className="flex items-center gap-x-4 md:gap-x-5">
                          <button
                            className="bg-main text-lightColor hover:text-grayColor transition px-3 md:px-4 py-2 text-xs md:text-sm rounded"
                            onClick={() => navigate(`/AFLAM.TV/movie/${movie.id}`)}
                          >
                            Watch
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          )}
        </Swiper>
      </div>
    </>
  );
};
export default Main;
