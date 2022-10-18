/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const {getOptions} = require('../server/database')

router.get('/', (req, res) => {
  const option = {
    option1: "hi1",
    option2: 'hi2',
    option3: 'hi3',
    option4: 'hi4'
  }
  res.render('submissions', option);
});

router.post('/', (req, res) => {
  const {answer} = req.body
  console.log(answer)
  res.redirect('/')
})


module.exports = router;
