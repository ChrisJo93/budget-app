const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* To Do:
1. Post route for wallets.
2. Put route for wallets.
3. Delete route for wallets. 
*/

router.get('/', (req, res) => {
  const query = `SELECT "wallet".income, "wallet".user_id, "wallet".post_date, "wallet".wallet_name FROM "wallet";`;
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

module.exports = router;
