
const Job = require('../Models/jobModel');

exports.getJobs = async () => {
  return Job.find();
  // Add more service functions as needed
};
