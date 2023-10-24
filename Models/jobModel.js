const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Indicates that 'title' is a required field
  },
  salary: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('Job', jobSchema);
