const jobService = require('../services/jobService');

exports.getJobs = async (req, res) => {
  try {
    const jobs = await jobService.getJobs();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

};
