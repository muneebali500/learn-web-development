import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === `GET`) {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    res.status(200).json(comment);
  }

  if (req.method === `DELETE`) {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);

    res.status(200).json(deletedComment);
  }

  // if (req.method === `PATCH`) {
  //   const index = comments.findIndex(
  //     (comment) => comment.id === parseInt(commentId)
  //   );

  //   const newComment = {
  //     id: Date.now(),
  //     text: `change text`,
  //   };

  //   comments.splice(index, 1, newComment);

  //   res.status(200).json(comments);
  // }
}
