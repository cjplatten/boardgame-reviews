import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";
import SingleReviewComments from "./SingleReviewComments";
import Voter from "./Voter";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [commentCount, setCommentCount] = useState(0);
  const [voteCount, setVoteCount] = useState(0);
  const [createdAt, setCreatedAt] = useState("");
  const { review_id } = useParams();
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getSingleReview(review_id)
      .then((reviewFromApi) => {
        setReview(reviewFromApi);
        setCommentCount(reviewFromApi.comment_count);
        setVoteCount(reviewFromApi.votes);
        setCreatedAt(reviewFromApi.created_at.slice(0, 10));
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) setErr("Review not found.");
        else setErr("Something went wrong.");
      });
  }, [review_id]);

  if (err) return <p>{err}</p>;

  return (
    <div className="single-review-page">
      {isLoading ? (
        <h2> Loading... </h2>
      ) : (
        <div className="single-review">
          <div className="single-review-title">
            <h4>{review.title}</h4>
          </div>
          <div className="single-review-info-line">
            <h5>
              {review.owner} | {createdAt} | Category: {review.category}
            </h5>
          </div>
          <div className="single-review-body">
            <div className="single-review-image">
              <img
                className="random-review-grid-img"
                src={review.review_img_url}
                alt={review.title}
              />
            </div>
            <div className="single-review-body-text">
              <p>{review.review_body}</p>
            </div>
            <div className="single-review-comment-vote-counters">
              <Voter voteCount={voteCount} reviewId={review.review_id} />
              <p className="single-review-comment-counter">Comments: {commentCount}</p>
            </div>
          </div>
        </div>
      )}
      <SingleReviewComments />
    </div>
  );
};

export default SingleReview;
