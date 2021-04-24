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
  const query = `INSERT INTO "user_transaction" ("item_name", "amount", "date", "category_id", "user_id")
  VALUES ($1, $2, $3, $4, $5);`;
  const query2 = `INSERT INTO "user_transaction" ("item_name", "amount", "category_id", "user_id")
  VALUES ($1, $2, $3, $4);`;

  const promises = items.map((item) => {
    //if date is present, post with other data.
    if (item.date != null) {
      pool
        .query(query, [
          item.item_name,
          item.amount,
          item.date,
          item.category_id,
          item.user_id,
        ])
        .catch((err) => {
          if (err) {
            console.log(`mess`, err.detail, err.column, item);
          }
        });
    } else {
      //if date not present, post without date key.
      pool
        .query(query2, [
          item.item_name,
          item.amount,
          item.category_id,
          item.user_id,
        ])
        .catch((err) => {
          if (err) {
            console.log(`mess`, err.detail, err.column, item);
          }
        });
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
    pool.query(query, [item.id]).catch((err) => {
      if (err) {
        res.sendStatus(500);
        console.log(`mess`, err.detail, err.column, item);
      }
    });
  });
  //can handle multiple delete requests at once.
  //This will be used on the transaction table for the user to prep multiple item deletes at once.
  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error deleting transactions`, err);
    });
});

router.put('/', (req, res) => {
  const items = req.body;
  const query = `UPDATE "user_transaction" SET 
    item_name = $1,
    amount = $2,
    date = $3,
    category_id = $4

    WHERE id = $5;`;

  const promises = items.map((item) => {
    pool
      .query(query, [
        item.item_name,
        item.amount,
        item.date,
        item.category_id,
        item.id,
      ])
      .catch((err) => {
        if (err) {
          console.log(`error updating row`, err.detail, err.column, item);
        }
      });
  });

  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error updating transactions`, err);
    });
});

module.exports = router;
