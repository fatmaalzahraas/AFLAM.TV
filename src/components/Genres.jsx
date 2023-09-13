import { useCallback, useEffect, useState } from "react";
import axios, { API_KEY } from "../api";
const Genres = ({ genres, setGenres, selectedGenres, setSelectedGenres }) => {
  const handleSelectedGenres = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres?.filter((g) => g.id !== genre?.id));
  };
  const handleRemoveGenres = (genre) => {
    setSelectedGenres(selectedGenres?.filter((g) => g.id !== genre?.id));
    setGenres([...genres, genre]);
  };
  const fetchGenres = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      setGenres(data?.genres);
    } catch (err) {
      console.log(err.message);
    }
  }, [setGenres]);
  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);
  return (
    <div className="bg-lightColor dark:bg-darkBlue">
      <div className="container mx-auto px-[15px] py-5">
        <div className="">
          <ul className="flex items-center gap-x-[0.7rem] flex-wrap">
            {selectedGenres?.map((genre, idx) => {
              return (
                <li
                  key={`${genre.id}-${idx}`}
                  className="mb-[0.8rem] xxs:mb-[0.5rem] bg-lightBlue text-lightColor font-semibold dark:text-darkBlue xxs:text-[0.7rem] text-[0.9rem] xxs:px-[0.4rem] px-[0.6rem] xxs:py-[0.2rem] py-[0.3rem] rounded-[20px] "
                >
                  {genre.name}{" "}
                  <span
                    className="bg-main/80 text-darkColor rounded-[30px] px-[0.4rem] text-[0.8rem] ml-[0.5rem] cursor-pointer font-medium"
                    onClick={() => handleRemoveGenres(genre)}
                  >
                    X
                  </span>
                </li>
              );
            })}
            {genres?.map((genre, idx) => (
              <li
                key={`${genre.id}-${idx}`}
                className="mb-[0.8rem] xxs:mb-[0.5rem] bg-darkBlue dark:bg-lightColor text-lightColor xxs:text-[0.8rem] dark:text-darkBlue cursor-pointer xxs:px-[0.6rem] xxs:py-[0.3rem] px-[0.7rem] py-[0.5rem] rounded-[20px] font-medium"
                onClick={() => {
                  handleSelectedGenres(genre);
                }}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Genres;
