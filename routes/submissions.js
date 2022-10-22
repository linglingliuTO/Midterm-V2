/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const {getOptions,submitOptions, getLinks} = require('../db/queries/submitpoll')
const {  sendMailvoted  } = require('../server/mailgun.js');




router.get('/:uniqueKey', (req, res) => {

  const uniqueKey = req.params.uniqueKey
  const user_name = req.session.name

  getOptions(uniqueKey)
  .then(options => {
    const tempVars = { options: options,user_name  }
    res.render('submissions', tempVars)
   })
   .catch(e => res.send(e));
});

router.post('/', (req, res) => {
  const voter_name = req.body.voter_name
  const option_id  = req.body.option_id
  const poll_id  = req.body.poll_id
  const arr = []
  for (let i = 0; i < option_id.length; i++) {
    // function (voter_name, option_id,rank,poll_id)
    let p = submitOptions(voter_name, option_id[i], option_id.length-i, poll_id)
    arr.push(p)
  }
  Promise.all(arr).then(results => {
     getLinks(results[0][0].poll_id)
     .then (results => {
      const name = results[0].name
      const email = results[0].email
      const resultsLink = `http://localhost:8080/results/${results[0].sub_link}`
      const submissionLink = `http://localhost:8080/submissions/${results[0].admin_link}`
      // console.log(name, email, resultLink, submissionLink,results)
      sendMailvoted(name, email, resultsLink, submissionLink)
    })
    .catch(e => res.send(e));
    res.redirect(`/admin/${req.session.id}`)
  })



})


module.exports = router;
