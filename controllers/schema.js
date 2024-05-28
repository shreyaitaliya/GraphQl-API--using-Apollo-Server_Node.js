
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    genre: String!
    copiesAvailable: Int!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, genre: String!, copiesAvailable: Int!): Book
    updateBook(id: ID!, title: String, author: String, genre: String, copiesAvailable: Int): Book
    deleteBook(id: ID!): Book
  }
`;

module.exports = typeDefs;
