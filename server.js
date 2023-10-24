const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://suryakantkakkar:surya555@to-do.nydqlwi.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.use(express.json());
app.use(cors());

app.use('/api', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});