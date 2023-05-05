import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiUserLine, RiMoonClearLine, RiSearchLine } from "react-icons/ri";
import { MdFavorite, MdOutlineLightMode } from "react-icons/md";
import { DarkModeContext } from "../context/darkModeContext";
import { useNavigate, createSearchParams } from "react-router-dom";
import { UserAuth } from "../context/authContext";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
const Navbar = () => {
  const [theme, setTheme] = useContext(DarkModeContext);
  const { user, logOut } = UserAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [numSaved, setNumSaved] = useState(0);
  const params = { s: `${searchTerm}` };
  const navigate = useNavigate();
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate({
        pathname: "search-movies",
        search: `${createSearchParams(params)}`,
      });
      setSearchTerm("");
    }
  };
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/AFLAM.TV");
      toast.success("Logged out successfully");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setNumSaved(doc.data()?.savedMovies?.length);
    });
  }, [user?.email]);
  return (
    <>
      <div className="w-full bg-lightColor dark:bg-darkBlue/95 sm:dark:shadow-lightBlue dark:border-darkColor sm:shadow-lg sm:shadow-neutral-500 border-gray-200 border-b transition-colors duration-[0.4s]">
        <div className="container flex justify-between items-center px-[10px] sm:px-[15px] md:px-[30px] lg:px-[45px] py-5 mx-auto">
          <h1
            className="xxs:text-xl text-2xl md:text-3xl text-main font-bold italic cursor-pointer"
            onClick={() => navigate("home")}
          >
            AFLAM.TV
          </h1>
          <div className="flex items-center gap-x-3 md:gap-x-4">
            <div className="cursor-pointer items-center relative mr-1 hidden sm:flex">
              <input
                className="placeholder:italic placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] text-[0.9rem]  outline-0 w-full py-[3px] md:py-[5px] px-3 bg-lightColor border-borderColor border-[1px] rounded sm:focus:w-[260px] md:focus:w-[280px] lg:focus:w-[500px] xl:focus:w-[750px] transition-[width] duration-[0.5s]"
                placeholder="Search Any Movie...."
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-2 z-[5]" onClick={handleSubmit}>
                <RiSearchLine className="text-lightBlue/70 text-[14px] md:text-[16px] " />
              </button>
            </div>
            <div className="flex items-center gap-x-3 md:gap-x-4 xxs:gap-x-2">
              <p className="cursor-pointer text-darkBlue dark:text-lightColor font-medium text-[14px] md:text-[15px] xxs:text-[13px]">
                <Link to="movies">Movies</Link>
              </p>
              {user?.email && (
                <div className="relative">
                  <span className="absolute rounded-full xxs:w-3 xxs:h-3 w-3.5 h-3.5 bg-main flex items-center text-lightColor justify-center xxs:text-[8px] text-[9px] md:text-[10px] xxs:top[-5px] top-[-12px] right-[-4px] ">
                    {numSaved ? numSaved : "0"}
                  </span>
                  <Link to="my-account">
                    <MdFavorite className="cursor-pointer text-darkBlue dark:text-lightColor xxs:text-[15px] text-[17px] md:text-[19px]" />
                  </Link>
                </div>
              )}
              {user?.email ? (
                <Link
                  className="cursor-pointer xxs:text-[13px] text-[15px] md:text-[17px] text-main underline"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              ) : (
                <div className={showMenu ? "triangle" : "after:hidden"}>
                  <RiUserLine
                    className="cursor-pointer text-darkBlue dark:text-lightColor text-[17px] xxs:text-[15px]"
                    onClick={handleMenu}
                  />
                  {showMenu && (
                    <div
                      className="absolute bg-lightBlue/90 dark:bg-lightColor/90 z-10 w-[110px] md:w-[130px] min-h-[60px] top-[40px] left-[-35px] md:left-[-70px] flex items-center flex-col p-[8px] md:p-[10px] gap-y-[0.4rem]"
                      onClick={handleMenu}
                    >
                      <Link
                        to="login"
                        className="text-darkBlue text-[15px] md:text-[16px] hover:text-main transition xxs:text-[14px]"
                      >
                        Login
                      </Link>
                      <Link
                        to="register"
                        className="text-darkBlue text-[15px] md:text-[16px] hover:text-main transition xxs:text-[14px]"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className="px-2 xxs:px-1 border-[#D3D3D3] border-l"
              onClick={() => setTheme(!theme)}
            >
              {theme ? (
                <MdOutlineLightMode className="text-switchMode ml-2 cursor-pointer text-[1.4rem] xxs:text-[1.2rem]" />
              ) : (
                <RiMoonClearLine className="text-lightBlue ml-2 cursor-pointer text-[1.4rem] xxs:text-[1.2rem]" />
              )}
            </div>
          </div>
        </div>
        <div className="container px-[10px] mx-auto sm:hidden w-full  ">
          <div className="cursor-pointer flex items-center relative mr-1 sm:hidden bg-lightColor dark:bg-darkBlue/95 mb-3">
            <input
              className="placeholder:italic placeholder:text-[0.75rem] text-[0.9rem]  outline-0 w-full xxs:py-[2px] py-[3px] px-3 bg-lightColor border-borderColor border-[1px] rounded"
              placeholder="Search Any Movie...."
              value={searchTerm || ""}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <RiSearchLine
              className="text-lightBlue/70 text-[14px] md:text-[16px] absolute right-2 z-[5] cursor-pointer"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
