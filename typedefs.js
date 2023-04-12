const {gql} = require('apollo-server-express')

const typedefs = gql`
type Query {
    questions: [Question!]!
  }
  
  type Question {
    question: String!
    input_type: InputType!
    input_data: [String!]!
  }
  
  enum InputType {
    multiple_choice
  }
`

module.exports = typedefs