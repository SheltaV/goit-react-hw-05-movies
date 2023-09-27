import { List } from "./SearchedMovies.styled"

export const SearchedMovies = ({values, location}) => {
    return (
    <section>
        <ul>
            {values.map(item => {
                return <li key={item.id}>
                <List to={`${item.id}`} state={{from: location}}>
                    {!item.name ? item.title : item.name}
                </List>
                </li>
            })}
         </ul>
    </section>
    )
}