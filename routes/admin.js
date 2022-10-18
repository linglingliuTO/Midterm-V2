/*
 * This is for rendering results from database
 */

const express = require('express');
const router  = express.Router();
const {adminView, deletePoll} = require('../server/database')


router.get('/:userID', (req, res) => {
  const user_ID = req.params.userID
  adminView(user_ID)
  .then(adminTable => {
   const templateVars = {adminTable,user_ID};

    res.render("admin", templateVars)
    // res.send(adminTable)
  })
  .catch(e => res.send(e));
});


router.post('/:userID/:pollID/delete', (req, res) => {
  deletePoll(req.params.pollID,req.params.userID)
  .then(adminTable => {
    res.send("deleted");
  })
  .catch(e => res.send(e));
});




module.exports = router;


