'use strict';

const express = require('express');
const knex = require('knex');
const router = express.Router();
const axios = require('axios');

// http://api.yummly.com/v1/api/recipes?_app_id=9f89f5e2&_app_key=921a70d39578f949768d9def2e6549c3&q=onion+soup&requirePictures=true



// http://api.yummly.com/v1/api/recipe/${recipe}?_app_id=9f89f5e2&_app_key=921a70d39578f949768d9def2e6549c3

router.get('/recipes', (req, res, next) => {
  console.log('req: ',req.query.searchString);
  // axios.get(`https://api.punkapi.com/v2/beers?${searchString}`)
  axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=9f89f5e2&_app_key=921a70d39578f949768d9def2e6549c3&q=${req.query.searchString.replace(/ /ig, '+')}&requirePictures=true`)
  .then((resp) => {
    console.log('resp: ' + resp.data);
    res.send(resp.data);
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;
