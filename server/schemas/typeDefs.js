const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: _id
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    product(_id: ID!): Product
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String): Auth
  }
`;

module.exports = typeDefs;
