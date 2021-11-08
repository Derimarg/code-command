const { glp } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
      user: User
      order(_id: ID!): Order
  }

  type Mutation {
      addUser(
          firstName: String!
          lastName: String!
          email: String!
          password: String!
      ): Auth
      addOrder(): Order
      updateUser(
          firstName:  String
          lastName: String
          email: String
          password: String
      ): User
      login(email: String!): Auth
  }
`;

module.exports = typeDefs;
