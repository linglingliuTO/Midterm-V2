/*
 * This is for rendering results from database
 */

const express = require('express');
const router  = express.Router();
const {getPollResults, getPollName} = require('../db/queries/results')
const {getArray} = require('../server/helper')


router.get('/:pollID', (req, res) => {
  getPollResults(req.params.pollID)
  .then(pollresults => {
    const resultsData = getArray(pollresults,"result")
    const labelsData = getArray(pollresults, "title")
    const templateVars = {resultsData , labelsData };
    res.render("results", templateVars)
  })

  .catch(e => res.send(e));
});

// router.get('/:pollID', (req, res) => {
// getPollName(req.params.pollID)
//   .then(pollname => {
//     const surveyName = pollname.name_required
//     const templateVars = {surveyName};
//     res.render("results", templateVars)
//   })

// });

module.exports = router;


