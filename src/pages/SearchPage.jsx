import React, { useState, useEffect, useCallback, memo } from "react";
import { useLocation } from "react-router-dom";
import axios, { API_KEY } from "../api";
import SingleMovie from "../components/SingleMovie";
import Pagination from "../components/Pagination";
import PageTitle from "../components/PageTitle";
import Preloader from "../components/Preloader";
const SearchPage = () => {
  const { search } = useLocation();
  const searchTerm = search.slice(3);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchResults = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&page=${currentPage}&include_adult=false&query=${searchTerm}`
      );
      setMovies(data?.results);
      setTotalPages(data?.total_pages);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, [searchTerm, currentPage]);
  useEffect(() => {
    fetchResults();
  }, [fetchResults]);
  return (
    <PageTitle title="Search any movie you want">
      <div className="w-full bg-lightColor dark:bg-darkBlue searchPage-height">
        <div className="container px-[15px] py-4 mx-auto">
          {loading ? (
            <Preloader styles="justify-center mt-[8rem]" />
          ) : (
            <div className="grid xxs:justify-items-center xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-[1.2rem] xs:gap-x-[1.5rem] xxs:gap-x-[1.1rem] mb-[1.3rem] mt-[1.3rem]">
              {movies.length === 0 ? (
                <div className="w-full col-span-full flex justify-center mt-[3rem]">
                  <h2 className="text-darkBlue dark:text-lightColor text-[1.2rem] font-semibold">
                    Sorry, there are no results here. Please try again using
                    other words
                  </h2>
                </div>
              ) : (
                movies.map((movie) => (
                  <SingleMovie
                    movie={movie}
                    styles="h-90 xxs:w-[138px] w-[190px] md:w-[230px] lg:w-[240px]"
                    key={movie.id}
                  />
                ))
              )}
            </div>
          )}
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
  );
};

export default memo(SearchPage);
