import { GlobalStyle } from "./globalStyles/globalStyles";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews";
import { Layout } from "./Layout/Layout";
import { NotFound } from "./NotFound";

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));


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
          <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </div>);
};