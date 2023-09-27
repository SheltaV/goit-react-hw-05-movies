import { Searchbar } from "components/SearchForm/SearchForm";
import { SearchedMovies } from "components/SearchedMovies/SearchedMovies";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchSearching } from "services/api";
// import toast, { Toaster } from 'react-hot-toast';

export default function Movies() {
    const [searchedMovie, setSearchedMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const onSubmit = e => {
        const word = e.search.trim()
        if (!word) {return}
        setSearchParams({ query: word })
    }

    useEffect(() => {
        const searchedQuery = searchParams.get('query')
        if (!searchedQuery) {return}
    const searchMovie = async () => {
        try {
            const { results } = await fetchSearching(searchedQuery)
            setSearchedMovie([...results])
        }
        catch (err) {
            console.log(err)
        }
        }
        searchMovie()
    }, [searchParams])

    
    return (
        <div>
            <Searchbar onSubmit={onSubmit} />
            <SearchedMovies values={searchedMovie} location={location} />
        </div>)
}