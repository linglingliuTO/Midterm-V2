/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const {getOptions} = require('../server/database')

router.get('/:pollID', (req, res) => {
  const poll_ID = req.params.pollID
  getOptions(poll_ID)
  .then(options => {
    const tempVars = { options: options }
    console.log('tempVars', tempVars)    
    res.render('submissions', tempVars)
   })
   .catch(e => res.send(e));
});

router.post('/', (req, res) => {
  const {answer} = req.body
  console.log(answer)
  res.redirect('/')
})


module.exports = router;
