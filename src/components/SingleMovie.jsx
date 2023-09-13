import { useState } from "react";
import { TfiEye } from "react-icons/tfi";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { motion } from "framer-motion";
import { images } from "../api";
import { useNavigate } from "react-router-dom";
import NoImage from "../assets/no-image01.jpg";
import SavedMovie from "./SavedMovie";
import { UserAuth } from "../context/authContext";
import useFavoriteMovie from "../custom-hooks/useFavoriteMovie";
const SingleMovie = ({ movie, styles }) => {
  const {favoriteMovie} = useFavoriteMovie(movie)
  const { user } = UserAuth();
  const { like, myFavorites } = SavedMovie();
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  const variants = {
    hover: {
      scale: 1.2,
    },
    initial: {
      scale: 1,
    },
  };
  return (
    <div
      className={`flex justify-center border-border border-[1px] rounded-md overflow-hidden ${styles}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={`h-90 w-[200px] md:w-[240px] relative ${styles}`}>
        <div className="h-full w-full">
          <motion.img
            className="h-full w-full "
            variants={variants}
            animate={isHover ? "hover" : "initial"}
            transition={{ duration: 0.5 }}
            src={
              movie.poster_path
                ? `${images}original/${movie?.poster_path}`
                : NoImage
            }
            alt={movie?.title}
          />
        </div>
        <div className="group/item bg-blackColor/0 hover:bg-blackColor/60 transition-all duration-[0.5s] delay-[0.1s] w-full h-full absolute top-0 left-0 flex items-center justify-center gap-x-4">
          <motion.i
            whileHover={{ scale: 1.2 }}
            className="opacity-0 group-hover/item:opacity-100 transition-opacity delay-[0.1s]"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <TfiEye className="cursor-pointer text-lightColor text-[28px]" />
          </motion.i>
          <motion.i
            whileHover={{ scale: 1.2 }}
            className="opacity-0 group-hover/item:opacity-100 cursor-pointer text-[28px] transition-opacity delay-[0.1s]"
            onClick={() => myFavorites(movie)}
          >
            {like || favoriteMovie ? (
              <MdFavorite className="text-main" />
            ) : (
              <MdFavoriteBorder className="text-lightColor" />
            )}
          </motion.i>
        </div>
      </div>
    </div>
  );
};
export default SingleMovie;
