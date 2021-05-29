const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* To Do
1. Post route for new month goal
2. Put route to update month goal
3. Delete route to delete goal
4. 
 */

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

//fetches user goals by category for month display. This will provide month id, category id, and amount associated
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

//fetches total(sum) amount of all categories by month. Reworked database so this queries by date.
//further code is needed, probably in front end, to determine month by year.
router.get('/:id', (req, res) => {
  const query = `SELECT SUM(amount) as monthly_total 
  FROM "month_goal" 
  JOIN "month_list" 
  ON "month_goal".month_id = month_list.id
  WHERE "month_goal".month_id = $1;`;
  pool
    .query(query, [req.params.id])
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
Oh boy, I was gone 2 days and forgot what I did lol
*/

router.post('/', (req, res) => {
  const items = req.body;
  //set 2 queries to handle date entry. If user inputs date, run query. If no date entered, run query 2.
  const query = `INSERT INTO "month_goal" ("month_id", "category_id", "date", "amount", "user_id")
  VALUES ($1, $2, $3, $4, $5);`;
  const query2 = `INSERT INTO "month_goal" ("month_id", "category_id", "amount", "user_id")
  VALUES ($1, $2, $3, $4);`;

  const promises = items.map((item) => {
    if (item.date != null) {
      pool
        .query(query, [
          item.month_id,
          item.category_id,
          item.date,
          item.amount,
          item.user_id,
        ])
        .catch((err) => {
          if (err) {
            console.log(`Error posting goal`, err.detail, err.column, item);
          }
        });
    } else {
      pool
        .query(query2, [
          item.month_id,
          item.category_id,
          item.amount,
          item.user_id,
        ])
        .catch((err) => {
          if (err) {
            console.log(`Error posting goal`, err.detail, err.column, item);
          }
        });
    }
  });

  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error sending month goals`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
