const { default: mongoose, model } = require("mongoose");



const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
      },
      input_type: {
        type: String,
        required: true
      },
      input_data: {
        type: [{
          type: String
        }],
        required: false
      }
});


module.exports = model('Question', QuestionSchema)