import { useEffect, useState } from "react";
import Genres from "../components/Genres";
import axios, { API_KEY } from "../api";
import Pagination from "../components/Pagination";
import PageTitle from "../components/PageTitle";
import LoadingSkeleton from "../components/LoadingSkeleton";
import SingleMovie from "../components/SingleMovie";
const genresIDs = (specifiedGenres) => {
  if (specifiedGenres.length < 1) {
    return "";
  } else {
    const genreId = specifiedGenres?.map((genre) => genre.id);
    return genreId.reduce((acc, cur) => acc + "," + cur);
  }
};
const AllMovies = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const genresIds = genresIDs(selectedGenres);
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(
          `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genresIds}`
        );
        setMovies(data?.results);
        setTotalPages(data?.total_pages);
        setLoading(false)
      } catch (error) {
        setErr(true);
        setLoading(false)
        console.log(error);
      }
    }
    fetchMovies()
  }, [currentPage, genresIds]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {err ? (
        <div className="h-screen bg-lightColor dark:bg-darkBlue flex justify-center items-center">
          <h2 className="text-[1.2rem] font-semibold text-main">
            Sorry, Something Went Wrong!
          </h2>
        </div>
      ) : (
        <PageTitle title="All-Movies">
          <Genres
            genres={genres}
            setGenres={setGenres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
          <div className="w-full bg-lightColor dark:bg-darkBlue height-screen">
            <div className="container px-[15px] py-4 mx-auto">
              <div className="grid xxs:justify-items-center xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-[1.2rem] xs:gap-x-[1.5rem] xxs:gap-x-[1.1rem] mb-[1.3rem]">
                
                  {loading? [...Array(20).keys()].map(i => <LoadingSkeleton key={i} />) :   movies.length === 0 ? (
                    <div className="w-full col-span-full flex justify-center mt-[3rem]">
                      <h2 className="text-darkBlue dark:text-lightColor text-[1.2rem] font-semibold">
                        Sorry, there are no results here.
                      </h2>
                    </div>
                  ) : (
                    movies?.map((movie, idx) => (
                      <SingleMovie
                        movie={movie}
                        styles="h-90 xxs:w-[138px] w-[190px] md:w-[228px] lg:w-[240px]"
                        key={`${movie.id}-${idx}`}
                      />
                    ))
                  )}
                
              </div>
            </div>
          </div>
          {movies.length > 0 && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )}
        </PageTitle>
      )}
    </>
  );
};
export default AllMovies;
