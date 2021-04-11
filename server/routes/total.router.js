const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT SUM(amount) as monthly_total FROM "user_budget_goal" WHERE "month_id" = 2;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('error retrieving total', err);
      res.sendStatus(500);
    });
});

module.exports = router;
