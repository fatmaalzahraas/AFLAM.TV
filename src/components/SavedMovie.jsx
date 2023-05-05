import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { UserAuth } from "../context/authContext";
import { toast } from "react-toastify";
const SavedMovie = () => {
  const { user } = UserAuth();
  const [like, setLike] = useState(false);
  const movieRef = doc(db, "users", `${user?.email}`);
  const myFavorites = async (item) => {
    if (user?.email) {
      setLike(true);
      await updateDoc(movieRef, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      toast.info("Please log in first to save a movie");
    }
  };
  return { like, myFavorites };
};
export default SavedMovie;
