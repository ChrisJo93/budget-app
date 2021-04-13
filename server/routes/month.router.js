const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('made it');
  const query = `SELECT * FROM "month";`;
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

router.get('/total', (req, res) => {
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

// Query to return month's sum total with specifier
// SELECT
// "month".month_name,
// SUM(amount) as total
// FROM
// "user_budget_goal"
// INNER JOIN "month" ON "user_budget_goal".month_id = "month".id
// WHERE "month".month_name = 'February'
// GROUP BY
// "month".month_name;

module.exports = router;
