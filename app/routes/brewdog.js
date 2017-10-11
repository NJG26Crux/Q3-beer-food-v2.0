'use strict';

// const boom = require('boom');
const express = require('express');
// const jwt = require('jsonwebtoken');
const knex = require('knex'); //../knex
// const { camelizeKeys, decamelizeKeys } = require('humps');
const router = express.Router();
const axios = require('axios');

router.get('/beers', (req, res, next) => {
  console.log('req: ' + req.query.search);
  const searchString = req.query.search.replace('|', '&')
  axios.get(`https://api.punkapi.com/v2/beers?${searchString}`)
  .then((resp) => {
    console.log('resp: ' + resp.data);
    res.send(resp.data);
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;

// var $xhr = $.getJSON(`https://api.punkapi.com/v2/beers?${searchString}`);
