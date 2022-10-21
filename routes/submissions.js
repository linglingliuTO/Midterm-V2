/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const {getOptions,submitOptions} = require('../db/queries/submitpoll')

router.get('/:uniqueKey', (req, res) => {

  const uniqueKey = req.params.uniqueKey

  getOptions(uniqueKey)
  .then(options => {
    const tempVars = { options: options }
    console.log('tempVars', tempVars)
    res.render('submissions', tempVars)
   })
   .catch(e => res.send(e));
});

router.post('/', (req, res) => {
  const voter_name = req.body.voter_name
  const option_id  = req.body.option_id
  const rank  = req.body.rank
  const poll_id  = req.body.poll_id
  submitOptions(voter_name,option_id,rank,poll_id)
  .then(rows => {
  console.log("in router:" ,rows)
  res.send()

})

})


module.exports = router;
