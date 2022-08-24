import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries/queries";

export default function BookDetail({ bookId }) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  return (
    <div id="book-details">
      {data ? (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {data.book.author.books.map((book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>{loading ? `loading....` : `No books selected...`}</div>
      )}
    </div>
  );
}
