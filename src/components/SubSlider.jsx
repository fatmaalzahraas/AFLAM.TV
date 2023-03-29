import { useEffect, useState } from "react";
import axios, { API_KEY } from "../api";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SingleMovie from "./SingleMovie";
import { BsCameraReelsFill } from "react-icons/bs";
import NavigationBtns from "./NavigationBtns";
const SubSlider = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [indexSlide, setIndexSlide] = useState(0);
  useEffect(() => {
    axios
      .get(`movie/${url}?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err.message));
  }, [url]);
  console.log(movies)
  return (
    <div className="bg-lightColor dark:bg-darkBlue py-7">
      <div className="container px-2.5 py-3.5 mx-auto">
        <div className="flex items-center gap-x-3 mb-[1.7rem]">
          <h2 className="text-darkBlue dark:text-lightColor text-[1.3rem] font-bold">
            {title}
          </h2>
          <BsCameraReelsFill className="text-darkBlue dark:text-lightColor text-[20px]" />
        </div>

        <div>
          <Swiper
            className="w-full h-full"
            modules={[Navigation]}
            onSlideChange={(index) => {
              setIndexSlide(index.activeIndex);
              console.log(indexSlide)
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              415: {
                slidesPerView: 2,
                spaceBetween: 8
              },
              639: {
                slidesPerView: 3,
                spaceBetween: 2
              },
              865: {
                slidesPerView: 4,
                spaceBetween: 2
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 2
              },
              1500: {
                slidesPerView: 6,
                spaceBetween: 2
              },
              
            }}
          >
            <div>
              {movies?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <SingleMovie movie={item} />
                  </SwiperSlide>
                );
              })}
            </div>
            <NavigationBtns />
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default SubSlider;
