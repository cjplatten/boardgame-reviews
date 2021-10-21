import { useContext } from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";

const PostComment = ({ comments, setComments }) => {
  const { review_id } = useParams();
  const { userLogin } = useContext(UserContext);
  const [newComment, setNewComment] = useState({});
  const [isPosted, setIstPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log(newComment);
    postComment(review_id, newComment, userLogin.user).then(
      (commentResponse) => {
        console.log(commentResponse);
      }
    );
    setIsLoading(false)
    console.log("submitted!", e);
  }

  function handleInputChange(e) {
    setNewComment(e.target.value)
  }

  //add functionality that unshifts the new comment to a spread of the comments array once posting has finished for optimistic rendering to display the new comment at the top?

  let hidePostComment = true;

  return (
    <>
      {/* {hidePostComment ? (
        <button
          onClick={() => {
            hidePostComment = false;
            console.log(hidePostComment);
          }}
        >
          Show Post Comment
        </button>
      ) : (
        <> 
          <button
            onClick={() => {
              hidePostComment = true;
            }}
          >
            Hide Post Comment
          </button>
        */}
      <div className="post-comment-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="post-comment">Post Comment</label>
          <br></br>
          <input
            name="post-comment"
            onChange={(e) => {
              handleInputChange(e);
            }}
            required
            // onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          />
          <br></br>
          <button className="post-comment-button">Submit</button>
        </form>
      </div>
      {/* </>
      )} */}
    </>
  );
};

export default PostComment;
