import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api";

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        async function getReviews() {
            try {
                const getReviews = await fetchReviews(movieId)
                setReviews([...getReviews.results])
            }
            catch (err) {
                console.log(err)
            }
        }
        getReviews()
    }, [movieId])

    if (reviews.length === 0) {
        return <p>There's no information</p>
    }
    return (
        <ul>
            {reviews.map(review => {
                return (                   
                    <li key={review?.id}>
                        <h4>Author: {review?.author}</h4>
                        <i>{review?.content}</i>
                    </li>
                )
            })}
        </ul>
    )
}