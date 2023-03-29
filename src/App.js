import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import MyFavorites from './pages/MyFavorites';
import Movies from './pages/Movies';
import Signin from './pages/Login';
import Signup from './pages/Register';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="my-favorite" element={<MyFavorites />} />
    <Route path="movies" element={<Movies />} />
    <Route path="login" element={<Signin />} />
    <Route path="register" element={<Signup />}/>
  </Route>
));
function App() {
  return <RouterProvider router={router} />;
}

export default App;
