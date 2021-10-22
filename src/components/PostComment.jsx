import { useContext } from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";

const PostComment = ({ comments, setComments, setNewCommentRender }) => {
  const { review_id } = useParams();
  const { userLogin } = useContext(UserContext);
  const [newComment, setNewComment] = useState({});
  const [commentResponse, setCommentResponse] = useState({});
  const [isPosted, setIsPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    postComment(review_id, newComment, userLogin.user).then(
      (responseFromApi) => {
        setCommentResponse(responseFromApi);
        setNewCommentRender((currNewCommentRender) => {
          const updatedCommentRender = [...currNewCommentRender]
          updatedCommentRender.unshift(responseFromApi)
          return updatedCommentRender
        })
        setIsPosted(true)
      }
    );
    setIsLoading(false);
  }

  function handleInputChange(e) {
    setNewComment(e.target.value);
  }

  //add functionality that unshifts the new comment to a spread of the comments array once posting has finished for optimistic rendering to display the new comment at the top?

  return (
    <>
      {isPosted ? <> 
      <h3>Comment posted!</h3>
      <button onClick={()=>setIsPosted(false)}>Post another comment?</button>
      </>
      :<div className="post-comment-container">
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
      </div>}
    </>
  );
};

export default PostComment;
