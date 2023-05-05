import { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import Footer from "../components/Footer";
const RootLayout = () => {
  const [theme] = useContext(DarkModeContext);
  return (
    <>
      <div className={theme ? "dark" : ""}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default RootLayout;
