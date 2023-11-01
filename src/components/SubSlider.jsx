import { Suspense, lazy, useEffect, useState } from "react";
import axios, { API_KEY } from "../api";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsCameraReelsFill } from "react-icons/bs";
import NavigationBtns from "./NavigationBtns";
import { wait } from "../App";
import LoadingSkeleton from "./LoadingSkeleton";
const SingleMovie = lazy(() => wait(1500).then(() => import("./SingleMovie")))
const SubSlider = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [isBegin, setIsBegin] = useState(true);
  useEffect(() => {
      const fetchMovies = async() => {
        try {
          const res = await axios.get(`movie/${url}?api_key=${API_KEY}&language=en-US&page=1`);
          setMovies(res.data.results);
        } catch(err) {
          console.log(err.message);
        }
      }
      fetchMovies()
  }, [url]);
  return (
    <div className="bg-lightColor dark:bg-darkBlue py-7">
      <div className="container px-[10px] md:px-[30px] lg:px-[45px] py-3.5 mx-auto">
        <div className="flex items-center gap-x-3 mb-[1.7rem]">
          <h2 className="text-darkBlue dark:text-lightColor text-[1.1rem] md:text-[1.3rem] font-bold xxs:text-[1rem]">
            {title}
          </h2>
          <BsCameraReelsFill className="text-darkBlue dark:text-lightColor text-[20px] xxs:text-[18px]" />
        </div>

        <div>
          <Swiper
            className="w-full h-full"
            speed={1200}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            onSlideChange={(index) => {
              setIsBegin(index.isBeginning);
              setIsEnd(index.isEnd);
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              415: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              639: {
                slidesPerView: 3,
                spaceBetween: 6,
              },
              865: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 8,
              },
              1500: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            
              <div>
              

                {movies?.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Suspense fallback={<LoadingSkeleton />}>
                        <SingleMovie movie={item}/>
                      </Suspense>
                    </SwiperSlide>  
                  );
                })}
                
              </div>
             
            <NavigationBtns start={isBegin} end={isEnd} />
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default SubSlider;
