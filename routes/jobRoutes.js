const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobController');

router.get('/jobs', jobController.getJobs);


module.exports = router;
