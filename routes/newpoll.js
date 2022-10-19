/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const addPoll = require('../db/queries/polls.js').addPoll;

router.get('/', (req, res) => {
  res.render('newpoll');
});

router.post('/', (req, res) => {
  req.session.userId = 1;
  console.log(req.body);
  addPoll(req)
  .then(rows => {
    console.log(rows);
  })

})

module.exports = router;

