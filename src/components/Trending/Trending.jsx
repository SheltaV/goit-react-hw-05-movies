import {List} from "./Trending.styled"

export const Trending = ({ values }) => {
    return values.map(item => {
                return <li key={item.id}>
                <List to={`movies/${item.id}`}>
                    {!item.name ? item.title : item.name}
                </List>
                </li>
            })
}