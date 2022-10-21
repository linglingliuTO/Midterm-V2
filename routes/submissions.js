/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const {getOptions,submitOptions, getLinks} = require('../db/queries/submitpoll')
const { sendMail } = require('../server/mailgun.js');




router.get('/:uniqueKey', (req, res) => {

  const uniqueKey = req.params.uniqueKey

  getOptions(uniqueKey)
  .then(options => {
    const tempVars = { options: options }
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
    console.log("promise all", results)
    res.redirect(`/admin/${req.session.id}`)
  })


//   submitOptions(voter_name,option_id,rank,poll_id)
//   .then(rows => {
//     getLinks (rows[0].poll_id)
//     .then (rows => {
//       console.log(rows)
//     })
//     // .then(rows => {
//     //   console.log(rows)
//     // //   testData = rows[0].poll_id
//     // //   // sendMail(testData);
//   // })
// })

})


module.exports = router;
