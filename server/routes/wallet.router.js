const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT * FROM "wallet";`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`error retrieving wallets`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
