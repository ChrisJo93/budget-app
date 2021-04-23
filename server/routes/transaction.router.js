const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT * FROM "user_transaction"`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`error retrieving transactions`, err);
      res.sendStatus(500);
    });
});

router.get('/:category', (req, res) => {
  const query = `SELECT * FROM "user_transaction"
  JOIN "transaction_category" on "user_transaction".category_id = "transaction_category".id
  WHERE "transaction_category".id = $1;`;
  pool
    .query(query, [req.params.category])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`error retrieving transactions by category`, err);
    });
});

router.post('/', (req, res) => {
  const item = req.body;
  console.log(req.body);
  const query = `INSERT INTO "user_transaction" ("item_name", "amount", "date", "category_id","user_id")
  VALUES ($1, $2, $3, $4, $5);`;
  pool
    .query(query, [
      item.item_name,
      item.amount,
      item.date,
      item.category_id,
      item.user_id,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error sending transaction`, err);
    });
});

/* 
In Progress:
Put route for manual date entry
Post transaction
Delete transaction from history
*/
module.exports = router;
