const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT * FROM "user_transaction";`;
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
  const items = req.body;
  const query = `INSERT INTO "user_transaction" ("item_name", "amount", "date", "category_id","user_id")
  VALUES ($1, $2, $3, $4, $5);`;
  const query2 = `INSERT INTO "user_transaction" ("item_name", "amount", "category_id","user_id")
  VALUES ($1, $2, $3, $4);`;

  const promises = items.map((item) => {
    //if date is present, post with other data.
    if (item.date != null) {
      pool.query(query, [
        item.item_name,
        item.amount,
        item.date,
        item.category_id,
        item.user_id,
      ]);
    } else {
      //if date not present, post without date key.
      pool.query(query2, [
        item.item_name,
        item.amount,
        item.category_id,
        item.user_id,
      ]);
    }
  });
  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error sending transactions`, err);
    });
});

router.delete('/', (req, res) => {
  const items = req.body;
  const query = `DELETE FROM "user_transaction" WHERE id = $1;`;

  const promises = items.map((item) => {
    pool.query(query, [item.id]);
  });
  //can handle multiple delete requests at once.
  //This will be used on the transaction table for the user to prep multiple item deletes at once.
  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error deleting transactions`, err);
    });
});

/* 
In Progress:
Put route for manual date entry
*/
module.exports = router;
