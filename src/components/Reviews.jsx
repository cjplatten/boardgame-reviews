import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

//   console.log(category);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <ul className="all-reviews">
        {reviews.map((review, index) => {
          return (
            <Link to={`/reveiws/${review.review_id}`} className="card-link">
              <li className="reviews-in-list" key={review.review_id}>
                <div className="reviews-in-list-title">
                  <h4>{review.title}</h4>
                </div>
                <div className="reviews-in-list-info-line">
                  <h5>
                    {review.owner} | {review.created_at.slice(0, 10)} |
                    Category: {review.category}
                  </h5>
                </div>
                <div className="reviews-in-list-body-preview">
                  <p>{review.review_body.slice(0, 125)}...</p>
                </div>
                <div className="reviews-in-list-comment-vote-counters">
                  <p>Votes: {review.votes} | Comments: {review.comment_count}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
