/*
 * This is for rendering results from database
 */

const express = require('express');
const router  = express.Router();
const {adminView, deletePoll} = require('../db/queries/admin')


router.get('/:userID', (req, res) => {
  const user_ID = req.session.id
  const user_name = req.session.name
  if (!user_ID) {
    res.redirect("../login")
    return
  }

  adminView(user_ID)
  .then(adminTable => {
   const templateVars = {adminTable,user_ID,user_name};

    res.render("admin", templateVars)
    // res.send(adminTable)
  })
  .catch(e => res.send(e));
});


router.post('/:userID/:pollID/delete', (req, res) => {
  const user_ID = req.session.id
  deletePoll(req.params.pollID,req.params.userID)
  .then(adminTable => {
    res.redirect(`/admin/${user_ID}`);
  })
  .catch(e => res.send(e));
});




module.exports = router;


