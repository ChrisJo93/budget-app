const express = require('express');
const pool = require('../modules/pool');
const { route } = require('./transaction.router');
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

router.get('/month_goal/:id/:year', (req, res) => {
  const query = ` SELECT "month_list".month_name, SUM(amount) as total 
  FROM "month_goal" INNER JOIN "month_list" on "month_goal".month_id = "month_list".id 
  WHERE "month_list".id = $1 
  AND DATE_PART('year', "month_goal".date) = $2
  GROUP BY "month_list".month_name;`;

  pool
    .query(query, [req.params.id, req.params.year])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`error retrieving total`, err);
      res.sendStatus(500);
    });
});

router.post('/month_goal', (req, res) => {
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

router.put('/month_goal', (req, res) => {
  const items = req.body;
  const query = `UPDATE "month_goal" SET 
  month_id = $1,
  category_id = $2,
  date = $3,
  amount = $4 

  WHERE id = $5;`;

  const promises = items.map((item) => {
    pool
      .query(query, [
        item.month_id,
        item.category_id,
        item.date,
        item.amount,
        item.id,
      ])
      .catch((err) => {
        if (err) {
          console.log(
            `Error updating month goal`,
            err.detail,
            err.column,
            item
          );
        }
      });
  });

  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error updating months`, err);
      res.sendStatus(500);
    });
});

router.delete('/month_goal', (req, res) => {
  const items = req.body;
  const query = `DELETE FROM "month_goal" WHERE id = $1;`;

  const promises = items.map((item) => {
    pool.query(query, [item.id]).catch((err) => {
      if (err) {
        console.log(`Error deleting goal`, err.detail, err.column, item);
      }
    });
  });

  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error deleting goal`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
