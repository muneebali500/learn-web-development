import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "../queries/queries";

const initialBookValues = {
  name: ``,
  genre: ``,
  authorId: ``,
};

export default function AddBook() {
  const [bookValues, setBookValues] = useState(initialBookValues);
  const { name, genre, authorId } = bookValues;
  const [addBook, { loading, error, data }] = useMutation(ADD_BOOK);

  function handleChange(e) {
    const { name, value } = e.target;

    setBookValues((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  }

  function displayAuthors() {
    const { loading, error, data } = useQuery(GET_AUTHORS);

    if (loading) return <option disabled>loading....</option>;
    if (error) return <option>error....</option>;

    return data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  }

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book Name</label>
        <input onChange={handleChange} name="name" value={name} type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input onChange={handleChange} name="genre" value={genre} type="text" />
      </div>

      <div className="field">
        <label>Author</label>
        <select onChange={handleChange} name="authorId" value={authorId}>
          <option>Select Author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}
