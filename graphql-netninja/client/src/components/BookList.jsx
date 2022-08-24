import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";
import BookDetail from "./BookDetail";

export default function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [bookId, setBookId] = useState(``);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li onClick={() => setBookId(book.id)} key={book.id}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetail bookId={bookId} />
    </div>
  );
}
