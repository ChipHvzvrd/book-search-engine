const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    hellowWorld: String
}`;

module.exports = typeDefs;