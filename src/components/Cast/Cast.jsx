import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "services/api";
import { Container, MiniContainer } from "./Cast.styled";

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    const defaultImg = 'https://via.placeholder.com/100x150/C5C5C5/C5C5C5';
    
    useEffect(() => {
        async function getCast() {
            try {
                const getCast = await fetchCast(movieId)
                setCast([...getCast.cast])
            }
            catch (err) {
                console.log(err)
            }
        }
        getCast()
    }, [movieId])

    if (cast.length === 0) {
        return <p>There's no information</p>
    }
    return (
        <ul>
            {cast.map(actor => {
                return (
                        <Container key={actor?.id}>
                <img src={
                actor?.profile_path ?
                `https://image.tmdb.org/t/p/w500/${actor?.profile_path}` : defaultImg}
                width={100}
                            alt="poster" />
                        <MiniContainer>
                            <h4>{actor?.name}</h4>
                            <p>Character: {actor?.character}</p>
                        </MiniContainer>
                        </Container>
                    )
            })}
        </ul>
    )

}