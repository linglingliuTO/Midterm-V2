/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { addPoll } = require('../db/queries/addpoll.js')
const { addOptions } = require('../db/queries/addoptions.js');
const { sendMail } = require('../server/mailgun.js');
const { generateRandomString } = require('../server/helper.js');

router.get('/', (req, res) => {
  res.render('newpoll');
});

router.post('/', (req, res) => {
  // remove when session handeling is added
  // addPoll = (user_id, sub_link, admin_link, name_required)
  const uniqueKey = generateRandomString()

  admin_link = uniqueKey
  sub_link = uniqueKey


  addPoll(req.session.id, sub_link, admin_link, req.body.question)
    .then(rows => {
      const poll_id = rows[0].id;
      req.session.pollId = poll_id
      const arr = []

      for (let i = 0; i < req.body.option.length; i++) {
        let p = addOptions(req.body.option[i], poll_id, req.body.description[i])
        arr.push(p)
      }
      Promise.all(arr).then(results => {
        console.log("promise all", results)
        res.redirect(`/admin/${req.session.id}`)

      })
    })
    // .then( {

    // //   testData = rows[0].poll_id
    // //   // sendMail(testData);


})

module.exports = router;

