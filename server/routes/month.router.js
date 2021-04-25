const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//fetches all months for form list
router.get('/month_list', (req, res) => {
  const query = `SELECT * FROM "month_list";`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('error retrieving months list', err);
      res.sendStatus(500);
    });
});

//fetches user goals for month display. This will provide month id, category id, and amount associated
router.get('/month_goal', (req, res) => {
  const query = `SELECT * FROM "month_goal";`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('error retrieving mount goals', err);
      res.sendStatus(500);
    });
});

//fetches total(sum) amount of all categories by month. This works, but it will return the wrong values in a year
router.get('/:month_goal_total', (req, res) => {
  const query = `SELECT SUM(amount) as monthly_total FROM "month_goal";`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`error retrieving total`, err);
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

/*
In Progress:
Get budget set for specific month based on date and month_id
Post new monthly budget
Put update monthly budget
Delete month budget
*/

module.exports = router;
