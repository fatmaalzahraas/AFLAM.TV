import Image from "../assets/aflam02.jpg";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/authContext";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Preloader from "../components/Preloader";
import { images } from "../api";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
const MyAccount = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    try {
      const getData = async () => {
        setLoading(false);
        const docSnap = await getDoc(doc(db, "users", `${user?.email}`));
        const moviesData = await docSnap.data().savedMovies;
        setMovies(moviesData);
      };
      getData();
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  }, [user?.email]);
  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteMovie = async (mId) => {
    try {
      const result = movies?.filter((el) => el.id !== mId);
      setMovies(result);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <PageTitle title="Your Favorite Movies">
      <div className=" w-full min-h-screen bg-lightColor dark:bg-darkBlue">
        <div className="relative h-[150px] sm:h-[190px] md:h-[250px] lg:h-[300px] w-full">
          <img className="w-full h-full object-cover" src={Image} alt="/" />
          <div className="absolute bg-darkBlue/50 dark:bg-darkBlue/60 w-full top-0 h-full"></div>
          <div className="absolute top-16 left-7 sm:top-20 sm:left-14 md:top-28 md:left-14 lg:top-36 lg:left-20">
            <h2 className="text-lightColor font-bold text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]">
              My Favorite Movies
            </h2>
          </div>
        </div>
        <div className="py-10 md:py-16 lg:py-18 bg-lightColor dark:bg-darkBlue">
          {loading ? (
            <Preloader styles="justify-center mt-[3rem]" />
          ) : (
            <div>
              {movies?.length > 0 ? (
                <div className="container px-[20px] mx-auto ">
                  <div className="flex flex-wrap gap-x-[0.7rem] xs:justify-center xxs:justify-center">
                    {movies?.map((movie) => (
                      <div
                        key={movie.id}
                        className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[24%] xl:w-[20%] flex h-[350px] justify-between mb-6 border-border border rounded "
                      >
                        <div className="w-full h-full">
                          <img
                            className="w-full  object-cover rounded-t h-[210px]"
                            src={`${images}original/${movie?.img}`}
                            alt={movie?.title}
                          />
                          <div className=" mt-4 text-center px-2">
                            <h3 className="text-darkBlue dark:text-lightColor font-semibold text-[0.9rem] ">
                              {movie?.title}
                            </h3>
                            <button
                              className="bg-main px-3 py-1 text-lightColor font-medium rounded text-[0.9rem] mt-3"
                              onClick={() => navigate(`/movie/${movie?.id}`)}
                            >
                              Watch
                            </button>
                            <button
                              className="text-lightColor font-medium px-3 py-1 rounded text-[0.9rem] mt-3 ml-3 bg-switchMode"
                              onClick={() => deleteMovie(movie?.id)}
                            >
                              Remove x
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <h3 className="text-darkBlue dark:text-lightColor font-bold text-[1.2rem]">
                    Your Favorites Page Is Empty{" "}
                  </h3>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </PageTitle>
  );
};
export default MyAccount;
