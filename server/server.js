const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const workshopSchema = new mongoose.Schema({
  _id: String,
  name: String,
  date: Date,
  clicks: Number,
  text: String,
  image: String,
  show: Boolean,
  premium: Boolean,
  link: String,
}, { collection: 'workshops' });

const Workshop = mongoose.model('Workshop', workshopSchema);

app.get('/getData', async (req, res) => {
  try {
    const data = await Workshop.find({});
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching workshop data');
  }
});

const priceSchema = new mongoose.Schema({
  _id: String,
  type: String,
  doublePrice: String,
  singlePrice: String,
}, { collection: 'prices' });

const Price = mongoose.model('Price', priceSchema);

app.get('/getPriceData', async (req, res) => {
  try {
    const priceData = await Price.find({});
    res.send(priceData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching price data');
  }
});

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
