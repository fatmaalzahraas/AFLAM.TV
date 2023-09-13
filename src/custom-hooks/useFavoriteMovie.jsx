import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { UserAuth } from "../context/authContext";

const useFavoriteMovie = (movie) => {
  const { user } = UserAuth();
  const [favoriteMovie, setFavoriteMovie] = useState(false);
  useEffect(() => {
    const getSavedMovies = async () => {
      if (user?.email) {
        const docSnap = await getDoc(doc(db, "users", `${user?.email}`));
        const moviesData = await docSnap
          .data()
          .savedMovies.find((m) => m.id === movie.id);
        moviesData ? setFavoriteMovie(true) : setFavoriteMovie(false);
      } else {
        setFavoriteMovie(false);
      }
    };
    getSavedMovies();
  }, [user?.email, movie.id]);
  return { favoriteMovie };
};

export default useFavoriteMovie;
