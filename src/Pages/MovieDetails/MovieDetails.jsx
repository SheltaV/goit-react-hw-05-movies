import { useEffect, useState } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { fetchDetails } from "services/api";
import { BsFillBackspaceFill } from 'react-icons/bs';
import { Container, UpperWrapper, LinkStyle, Error, GoBack } from "./MovieDetails.styled";

export default function MovieDetails () {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(false)
    const location = useLocation();

    const defaultImg = 'https://via.placeholder.com/250x400/C5C5C5/C5C5C5';

    useEffect(() => {
        async function getMovie() {
            try {
                const getInfo = await fetchDetails(movieId)
                setMovie(getInfo)
            }
            catch (err) {
                console.log(err);
                if (err.code === 'ERR_BAD_REQUEST') {
                    setError(true);
                }
            }
        }
        getMovie()
    }, [movieId])

    return (
    <>
            {error && <Error>Sorry, there's no information for this movie!</Error>}
            {movie && <Container>
        <UpperWrapper>
            <img src={
        movie?.poster_path ?
        `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` : defaultImg}
                width={250}
                alt="poster"
                />
            <GoBack to={location.state?.from ?? '/'}><BsFillBackspaceFill size={20} /> Go back</GoBack>
            </UpperWrapper>
        <h1>{movie?.title}</h1>
        <p>User score: {movie?.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie?.overview}</p>
        <h3>Genres</h3>
            <ul>
            {movie?.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <LinkStyle to='cast'>Cast</LinkStyle>
                </li>
                <li>
                    <LinkStyle to='reviews'>Reviews</LinkStyle>
                </li>
            </ul>
            <Outlet/>
        </Container>}
        
        </>)
}