import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";
import SingleReviewComments from "./SingleReviewComments";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  console.log(review_id);

  useEffect(() => {
    getSingleReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, []);

  console.log(review);

  return (
    <div className="single-review-page">
      <div className="single-review">
        <div className="single-review-title">
          <h4>{review.title}</h4>
        </div>
        <div className="single-review-info-line">
          <h5>
            {review.owner} | {review.created_at} | Category: {review.category}
          </h5>
        </div>
        <div className="single-review-body">
          <div className="single-review-body-text">
            <p>{review.review_body}</p>
          </div>
          <div className="single-review-comment-vote-counters">
            <p>Votes: {review.votes}</p>
            <p>Comments: {review.comment_count}</p>
          </div>
        </div>
      </div>
      <SingleReviewComments />
    </div>
  );
};

export default SingleReview;
