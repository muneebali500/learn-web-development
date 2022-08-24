import React, { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(``);

  async function fetchComments() {
    const res = await fetch(`/api/comments`);
    const comments = await res.json();
    setComments(comments);
  }

  async function submitComment() {
    const response = await fetch(`/api/comments`, {
      method: `POST`,
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }

  async function deleteComment(commentId) {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: `DELETE`,
    });

    const data = await response.json();
    console.log(data);
    fetchComments();
  }

  // async function updateComment(commentId) {
  //   const response = await fetch(`/api/comments/${commentId}`, {
  //     method: `PATCH`,
  //   });

  //   const data = await response.json();
  //   console.log(data);
  //   fetchComments();
  // }

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>load comments</button>
      {comments.map((item) => {
        return (
          <div key={item.id} onClick={() => deleteComment(item.id)}>
            <h2>{item.id}</h2>
            <p>{item.text}</p>
            {/* <button onClick={() => updateComment(item.id)}>
              update comment
            </button> */}
          </div>
        );
      })}
    </div>
  );
}
