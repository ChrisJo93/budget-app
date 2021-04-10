const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Route Includes
const months = require('./month.router');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get('/add', (req, res) => {
    console.log(req.body);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    sound.play(randomSound(generateRandomNumber()));
    console.log(`Joh'gaav?`);
  });

  //Routes
  server.use('/month', months);
});

// Nerd middleware
const sound = require('sound-play');

function generateRandomNumber() {
  return Math.floor(Math.random() * 2);
}

function randomSound(x) {
  console.log(x);
  switch (x) {
    case 1:
      return './server/deetdoot.wav';
    case 2:
      return './server/instruction.wav';
    default:
      return './server/deetdoot.wav';
  }
}
