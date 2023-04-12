const resolvers = {
    Query: {
        questions: () => [
            {
                question: "Do you prefer coffee or tea?",
                input_type: "multiple_choice",
                input_data: ["Coffee", "Tea", "Neither"]
              },
            {
                question: "Do you prefer coffee or tea?",
                input_type: "multiple_choice",
                input_data: ["Coffee", "Tea", "Neither"]
              },
        ]
    }
}

module.exports = resolvers