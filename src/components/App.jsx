import { GlobalStyle } from "./globalStyles/globalStyles";
import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import("../Pages/MovieDetails/MovieDetails"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='movies' element={<Movies />}/>
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
          <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyle />
    </div>);
};