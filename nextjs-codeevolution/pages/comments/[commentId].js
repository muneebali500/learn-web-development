import React from "react";
import { comments } from "../../data/comments";

export default function Comment({ comment }) {
  return (
    <div>
      <h2>
        {comment.id} - {comment.text}
      </h2>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentId: `1` },
      },
      {
        params: { commentId: `2` },
      },
      {
        params: { commentId: `3` },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { commentId } = context.params;

  //   const response = await fetch(`/comments/${commentId}`);
  ///// don't do above; Calling your own API from getStaticProps is not recommended

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  return {
    props: {
      comment,
    },
  };
}
