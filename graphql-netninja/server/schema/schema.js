import Book from "../models/book.js";
import Author from "../models/author.js";

import graphql, {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
// import _ from "lodash";

// const books = [
//   { id: `1`, name: `Name of the Wind`, genre: `Fantasy`, authorId: `2` },
//   { id: `2`, name: `The Final Empire`, genre: `Fantasy`, authorId: `3` },
//   { id: `3`, name: `The Long Earth`, genre: `Sci-Fi`, authorId: `1` },
//   { id: `4`, name: `The Hero of Ages`, genre: `Fantasy`, authorId: `2` },
//   { id: `5`, name: `The Color of Magic`, genre: `Fantasy`, authorId: `3` },
//   { id: `6`, name: `The Light Fantastic`, genre: `Fantasy`, authorId: `3` },
// ];

// const authors = [
//   { id: `1`, name: `Usama Khan`, age: 20 },
//   { id: `2`, name: `Usman Khwaja`, age: 24 },
//   { id: `3`, name: `Asad Brohi`, age: 21 },
// ];

const BookType = new GraphQLObjectType({
  name: `Book`,
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve(parent, args) {
          // return _.find(authors, { id: parent.authorId });
          return Author.findById(parent.authorId);
        },
      },
    };
  },
});

const AuthorType = new GraphQLObjectType({
  name: `Author`,
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) {
          // return _.filter(books, { authorId: parent.id });
          return Book.find({ authorId: parent.id });
        },
      },
    };
  },
});

const RootQuery = new GraphQLObjectType({
  name: `RootQueryType`,
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(books, { id: args.id });
        return Book.findById(args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
        return Author.findById(args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books;
        return Book.find({});
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors;
        return Author.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: `Mutation`,
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age,
        });

        return author.save();
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });

        return book.save();
      },
    },
  },
});

export default new GraphQLSchema({ query: RootQuery, mutation: Mutation });
