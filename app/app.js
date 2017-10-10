'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan')
  app.use(logger('dev'))
}

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

const beer_recipies = require('./routes/beer_recipies');
const brewdog = require('./routes/brewdog');
const favs = require('./routes/favs');
const food_recipies = require('./routes/food_recipies');
const ratings = require('./routes/ratings');
const token = require('./routes/token');
const users = require('./routes/users');
const yummly = require('./routes/yummly');

// app.use(beer_recipies);
// app.use(brewdog);
// app.use(favs);
// app.use(food_recipies);
// app.use(ratings);
// app.use(token);
app.use(users);
// app.use(yummly);

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.log(err)
  res.status(err.status || 500)
  res.json(err)
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


module.exports = app
