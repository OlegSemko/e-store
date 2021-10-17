const express = require('express')
const router = express.Router();
const client = require('../db');

router.get('/', (req, res) => {
  client.query('select * from orders', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

router.get('/:id(\\d+)', (req, res) => {
  client.query('select * from orders where id = $1', [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

router.post('/', (req, res) => {
  client.query('insert into orders (orderName) values ($1) returning id', [req.body.name], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

router.put('/:id(\\d+)', (req, res) => {
  client.query('update orders set orderName = $2 where id =$1 returning id', [req.body.name, req.body.id], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

router.delete('/:id(\\d+)', (req, res) => {
  client.query('delete from orders where id = ($1) returning id', [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.rows);
    res.json(result.rows);
  });
});

module.exports = router;
