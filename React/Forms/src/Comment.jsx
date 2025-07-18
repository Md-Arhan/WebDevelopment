import { useState } from "react";
import "./Comment.css";
import Comments from "./Comments";

export default function () {
  let [comments, setComments] = useState([{}]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log(comments);
  };

  return (
    <div>
      <h3>All Comments</h3>
      {comments.map((comment, idx) => {
        return <div className="comment" key={idx}>
          <span>{comment.remarks}</span>
          &nbsp;
          <br />
          <span>(rating = {comment.rating})</span>
          &nbsp;
          <p>{comment.username}</p>
        </div>;
      })}
      <Comments addNewComment={addNewComment} />
    </div>
  );
}


/*Lifting state up means moving shared state to the nearest common ancestor of two or more components so they can share and modify that state through props.

AddCommentForm (child)
     ↓ onSubmit (passes formData)
App (parent, stores all comments in state)
     ↓ passes each comment as prop
Comment (child, displays data)
*/