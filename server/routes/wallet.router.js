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

router.post('/', (req, res) => {
  const items = req.body;
  const query = `INSERT INTO "wallet" ("wallet_name", "income", "post_date", "user_id")
  VALUES ($1, $2, $3, $4);`;
  const query2 = `INSERT INTO "wallet" ("wallet_name", "income", "user_id")
  VALUES ($1, $2, $3);`;

  const promises = items.map((item) => {
    if (item.post_date != null) {
      pool
        .query(query, [
          item.wallet_name,
          item.income,
          item.post_date,
          item.user_id,
        ])
        .catch((err) => {
          if (err) {
            console.log(
              `Error posting new wallet`,
              err.detail,
              err.column,
              item
            );
          }
        });
    } else {
      pool
        .query(query2, [item.wallet_name, item.income, item.user_id])
        .catch((err) => {
          if (err) {
            console.log(
              `Error posting new wallet`,
              err.detail,
              err.column,
              item
            );
          }
        });
    }
  });
  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(
        `Error promising all new wallets`,
        err.detail,
        err.column,
        item
      );
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
  const items = req.body;
  const query = `UPDATE "wallet" SET
    income = $1,
    post_date = $2,
    wallet_name =$3

    WHERE id = $4;`;

  const promises = items.map((item) => {
    pool
      .query(query, [item.income, item.post_date, item.wallet_name, item.id])
      .catch((err) => {
        if (err) {
          console.log(`Error updating wallets`, err);
        }
      });
  });

  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error updating wallets`, err);
      res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
  const items = req.body;
  const query = `DELETE FROM "wallet" WHERE id = $1;`;

  const promises = items.map((item) => {
    pool.query(query, [item.id]).catch((err) => {
      if (err) {
        console.log(`Error deleting wallet`, err);
      }
    });
  });

  Promise.all(promises)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`error deleting wallets`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
