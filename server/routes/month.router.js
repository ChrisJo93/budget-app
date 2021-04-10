const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT * FROM "month"`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('error retrieving months', err);
      res.sendStatus(500);
    });
});

module.exports = router;
