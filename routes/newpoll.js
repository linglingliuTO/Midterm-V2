/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const addPoll = require('../db/queries/polls.js').addPoll;
const addOptions = require('../db/queries/options.js').addOptions;

router.get('/', (req, res) => {
  res.render('newpoll');
});

router.post('/', (req, res) => {
  // remove when session handeling is added
  req.session.userId = 1;
  console.log('req.body', req.body);
  addPoll(req)
  .then(rows => {
    const poll_id = rows[0].id;
    console.log('add poll', rows);
    addOptions(req, poll_id)
    .then(rows => {
      console.log('add option', rows);
    })

  })

})

module.exports = router;

