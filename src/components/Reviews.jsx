import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [reviewsTotal, setReviewsTotal] = useState(0);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviewsTotal(reviewsFromApi.length);
      const limitedData = reviewsFromApi.slice(startIndex, endIndex);
      setReviews(limitedData);
    });
  }, [startIndex, endIndex]);

  console.log(reviews);

  return (
    <div>
      <h2>Reviews</h2>
      <ul className="all-reviews">
        {reviews.map((review, index) => {
          return (
            <li className="reviews-in-list" key={reviews.review_id}>
              <div className="reviews-in-list-title">
                <h4>{review.title}</h4>
              </div>
              <div className="reviews-in-list-info-line">
                <h5>
                  {review.owner} |  {review.created_at.slice(0, 10)} | 
                  Category: {review.category}
                </h5>
                {/* <h5>{review.owner}</h5>
                <h5>{review.created_at.slice(0, 10)}</h5>
                <h5>Category: {review.category}</h5> */}
              </div>
              <div className="reviews-in-list-body-preview">
                <p>{review.review_body.slice(0, 125)}...</p>
              </div>
              <div className="reviews-in-list-comment-counter">
                <p>Comments: {review.comment_count}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
