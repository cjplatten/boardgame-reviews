import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewComments } from "../utils/api";
import PostComment from "./PostComment";

const SingleReviewComments = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <PostComment comments={comments} setComments={setComments}/>
      <ul className="all-comments">
        {comments.map((comment, index) => {
          return (
            <li className="comments-in-list" key={comment.comment_id}>
              <div className="comment-author">
                <h4>{comment.author}</h4>
              </div>
              <div className="comment-info-line">
                <h5>{comment.created_at.slice(0, 10)}</h5>
              </div>
              <div className="comment-body">
                <p>{comment.body}</p>
              </div>
              <div className="comment-vote-counters">
                <p>
                  Votes: {comment.votes}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleReviewComments;
