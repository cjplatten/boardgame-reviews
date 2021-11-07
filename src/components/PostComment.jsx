import { useContext } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";

const PostComment = ({ comments, setComments, setNewCommentRender }) => {
  const { review_id } = useParams();
  const { userLogin } = useContext(UserContext);
  const [newComment, setNewComment] = useState({});
  const [isPosted, setIsPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    postComment(review_id, newComment, userLogin.user).then(
      (responseFromApi) => {
        setNewCommentRender((currNewCommentRender) => {
          const updatedCommentRender = [...currNewCommentRender];
          updatedCommentRender.unshift(responseFromApi);
          return updatedCommentRender;
        });
        setIsPosted(true);
      }
    );
    setIsLoading(false);
  }

  function handleInputChange(e) {
    setNewComment(e.target.value);
  }

  if (isLoading) return <p>Posting comment...</p>

  return (
    <>
      {isPosted ? (
        <>
          <p>Comment posted!</p>
          <button className="post-another-comment-button" onClick={() => setIsPosted(false)}>
            Post another comment?
          </button>
        </>
      ) : (
        <div className="post-comment-container">
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Label>Post Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="post-comment"
              onChange={(e) => {
                handleInputChange(e);
              }}
              required
            />

            <button className="post-comment-button" type="submit">Submit</button>
          </Form>
        </div>
      )}
    </>
  );
};

export default PostComment;
