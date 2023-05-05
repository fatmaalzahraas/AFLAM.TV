import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AllMovies from "./pages/AllMovies";
import Signin from "./pages/Login";
import Signup from "./pages/Register";
import SearchPage from "./pages/SearchPage";
import MovieDetails from "./pages/MovieDetails";
import React, { Suspense, lazy } from "react";
import Preloader from "./components/Preloader";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MyAccount from "./pages/MyAccount";
const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
const LazyLoading = lazy(() =>
  wait(2000).then(() => import("./pages/RootLayout"))
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense
          fallback={
            <Preloader
              heightView="h-screen"
              styles="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
          }
        >
          <LazyLoading />
        </Suspense>
      }
      errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route
        path="my-account"
        element={
          <ProtectedRoutes>
            <MyAccount />
          </ProtectedRoutes>
        }
      />
      <Route path="movies" element={<AllMovies />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="login" element={<Signin />} />
      <Route path="register" element={<Signup />} />
      <Route path="search-movies" element={<SearchPage />} />
    </Route>
  )
);
function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
