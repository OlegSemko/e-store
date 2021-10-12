const express = require('express');
const router = express.Router();
const client = require('../db');

router.get('/', (req, res) => {
  client.query('select * from users', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

router.get('/:id(\\d+)', (req, res) => {
  client.query('select * from users where id = $1', [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

router.post('/', (req, res) => {
  client.query('insert into users (userName) values ($1) returning id', [req.body.name], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

router.delete('/:id(\\d+)', (req, res) => {
  client.query('delete from users where id = ($1) returning id', [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

module.exports = router;
