import { useEffect, useState } from "react";
import { Outlet, useParams, useLocation, Link } from "react-router-dom";
import { fetchDetails } from "services/api";
import { BsFillBackspaceFill } from 'react-icons/bs';
import { Container, UpperWrapper, LinkStyle } from "./MovieDetails.styled";

export const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    const defaultImg = 'https://via.placeholder.com/250x400/C5C5C5/C5C5C5';

    useEffect(() => {
        async function getMovie() {
            try {
                const getInfo = await fetchDetails(movieId)
                setMovie(getInfo)
            }
            catch (err) {
                console.log(err)
            }
        }
        getMovie()
    }, [movieId])
    console.log(movie)

    if (movie === null) {
        return <h1>Oops! Didn't find any page.</h1>
    }
    return (
        <Container>
        <UpperWrapper>
            <img src={
        movie?.poster_path ?
        `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` : defaultImg}
                width={250}
                alt="poster"
                />
            <Link to={location.state?.from ?? '/'}><button><BsFillBackspaceFill size={20} /> Go back</button></Link>
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
        
        </Container>)
}