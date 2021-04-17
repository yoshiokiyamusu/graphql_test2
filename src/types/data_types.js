const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: ID
    firstname: String!
    lastname: String!
    age: Int
  }

  type Podcast {
    id: ID!
    name: String!
    url: String!
  }

  input CreatePodcastInput {
    name: String!
    url: String!
  }

  input UpdatePodcastInput {
    name: String
    url: String
  }

  input DeletePodcastInput {
    id: ID!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    podcasts: [Podcast]
    users: [User]
    
  }

  type Mutation {
    createPodcast(input: CreatePodcastInput!): Podcast!
    updatePodcast(id: ID!, input: UpdatePodcastInput!): Podcast!
    deletePodcast(id: ID!): DeletePayload!
  }


  
`;
