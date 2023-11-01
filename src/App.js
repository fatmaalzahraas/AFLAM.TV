import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import React, { Suspense, lazy } from "react";
import Preloader from "./components/Preloader";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
export const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
const LazyLoading = lazy(() =>
  wait(1500).then(() => import("./pages/RootLayout"))
);
const Home = lazy(() => import('./pages/Home'))
const AllMovies = lazy(() => import('./pages/AllMovies'))
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Signin = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Register'));
const MyAccount = lazy(() => import('./pages/MyAccount'))
const MovieDetails = lazy(() => import('./pages/MovieDetails'))
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
