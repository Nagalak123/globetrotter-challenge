const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const destinationSchema = new mongoose.Schema({
  name: String,
  clues: [String],
  funFacts: [String],
});

const Destination = mongoose.model('Destination', destinationSchema);

app.get('/api/destinations', async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
});

app.post('/api/destinations', async (req, res) => {
  const { name, clues, funFacts } = req.body;
  const destination = new Destination({ name, clues, funFacts });
  await destination.save();
  res.json(destination);
});

app.post('/api/expand-dataset', async (req, res) => {
  const { prompt } = req.body;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Expand the following dataset of travel destinations with clues, fun facts, and trivia: ${prompt}`,
    max_tokens: 1500,
  });
  const expandedData = JSON.parse(response.data.choices[0].text);
  await Destination.insertMany(expandedData);
  res.json({ message: 'Dataset expanded successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
