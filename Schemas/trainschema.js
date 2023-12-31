const mongoose = require('mongoose');

const departureTimeSchema = new mongoose.Schema({
  Hours: Number,
  Minutes: Number,
  Seconds: Number,
});

const seatsAvailableSchema = new mongoose.Schema({
  sleeper: Number,
  AC: Number,
});

const priceSchema = new mongoose.Schema({
  sleeper: Number,
  AC: Number,
});

const trainSchema = new mongoose.Schema({
  trainName: String,
  trainNumber: String,
  departureTime: departureTimeSchema,
  seatsAvailable: seatsAvailableSchema,
  price: priceSchema,
  delayedBy: Number,
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
