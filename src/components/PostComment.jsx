import { useContext } from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const PostComment = ({comments, setComments}) => {
  const { userLogin } = useContext(UserContext);
  const [isPosted, setIstPosted] = useState(false)
  const [newComment, setNewComment] = useState({});

  function handleSubmit(e) {
      e.preventDefault()
    console.log('submitted!', e)
  }

  //add functionality that unshifts the new comment to a spread of the comments array once posting has finished for optimistic rendering to display the new comment at the top?

  return (
    <div>
      {/* <Form onSubmit={console.log('submitted!')}>
        <Form.Group className="post-comment">
          <Form.Label>Post Comment</Form.Label>
          <Form.Control as="textarea" rows={4} onChange={(e) => {console.log(e.target.value)}}/>
        <Button variant="success" className="post-comment-button">Submit</Button>
        </Form.Group>
      </Form> */}
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <input className="post-comment" onChange={(e) => {console.log(e.target.value)}}/>
        <Button variant="success" className="post-comment-button" onClick={(e) => {handleSubmit(e)}}>Submit</Button>

      </form>
    </div>
  );
};

export default PostComment;
