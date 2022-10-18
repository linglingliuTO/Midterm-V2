/*
 * This is for rendering results from database
 */

const express = require('express');
const router  = express.Router();
const {getPollResults, adminViewResults} = require('../server/database')
const {getArray} = require('../server/helper')


router.get('/:pollID', (req, res) => {
  getPollResults(req.params.pollID)
  .then(pollresults => {
    const resultsData = getArray(pollresults,"result")
    const labelsData = getArray(pollresults, "title")


    const templateVars = {resultsData , labelsData };
      console.log(resultsData )
    res.render("results", templateVars)
  })
  .catch(e => res.send(e));
});




module.exports = router;


