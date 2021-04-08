const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Nerd middleware
const sound = require('sound-play');
const path = require('path');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get('/add', (req, res) => {
    console.log(req.body);
  });
  // server.post('/request/custom', custom); to be determined

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  function generateRandomNumber() {
    return Math.floor(Math.random() * 2);
  }
  let x = generateRandomNumber();

  let customSound;
  server.listen(3000, (err) => {
    if (err) throw err;
    sound.play(`./server/deetdoot.wav`);
    console.log(`Joh'gaav?`);
  });
});
