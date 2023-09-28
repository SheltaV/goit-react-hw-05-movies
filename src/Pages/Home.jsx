import { SearchedMovies } from 'components/SearchedMovies/SearchedMovies';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';


export default function Home() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        async function getTrending() {
        try {
            const { results } = await fetchTrending()
            setTrending(results)
            }
        catch (err) {
            console.log(err)
            }
        }
        getTrending()
    }, [])
    console.log(trending)

    return (
        <ul>
            <SearchedMovies values={trending} />
        </ul>
    )
}