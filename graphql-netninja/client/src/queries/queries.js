import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      genre
    }
  }
`;

export const GET_BOOK = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
