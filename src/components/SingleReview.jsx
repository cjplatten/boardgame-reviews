import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";
import SingleReviewComments from "./SingleReviewComments";
import Voter from "./Voter";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [commentCount, setCommentCount] = useState(0);
  const [voteCount, setVoteCount] = useState(0);
  const [createdAt, setCreatedAt] = useState('')
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(false)

  console.log(review_id);

  useEffect(() => {    
    setIsLoading(true)
    
    getSingleReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setCommentCount(reviewFromApi.comment_count);
      setVoteCount(reviewFromApi.votes);
      setCreatedAt(reviewFromApi.created_at.slice(0,10))
      setIsLoading(false)
    });
  }, []);

  console.log(review);

  return (
    <div className="single-review-page">
      {isLoading ? <h2> Loading... </h2>
      :<div className="single-review">
        <div className="single-review-title">
          <h4>{review.title}</h4>
        </div>
        <div className="single-review-info-line">
          <h5>
            {review.owner} | {createdAt} | Category: {review.category}
          </h5>
        </div>
        <div className="single-review-body">
          <div className="single-review-body-text">
            <p>{review.review_body}</p>
          </div>
          <div className="single-review-comment-vote-counters">
            {/* <p>Votes: {voteCount}</p> */}
            <Voter voteCount={voteCount} reviewId={review.review_id}/>
            <p>Comments: {commentCount}</p>
          </div>
        </div>
      </div>}
      <SingleReviewComments />
    </div>
  );
};

export default SingleReview;
