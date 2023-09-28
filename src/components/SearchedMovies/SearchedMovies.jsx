import { useLocation } from "react-router-dom";
import { Item, List, ListItem } from "./SearchedMovies.styled"

export const SearchedMovies = ({ values }) => {
    const location = useLocation();

    const defaultImg = 'https://via.placeholder.com/200x110/C5C5C5/C5C5C5';

    return (
    <section>
        <List>
            {values.map(item => {
                return <ListItem key={item.id}>
                    
                <Item to={`/movies/${item.id}`} state={{from: location}}>
                        <img src={item?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}` : defaultImg} alt="movie" width={300} />
                        {!item.name ? item.title : item.name}
                </Item>
                </ListItem>
            })}
         </List>
    </section>
    )
}