/*
 * This is for rendering results from database
 */

const express = require('express');
const router  = express.Router();
const {getPollResults, getPollName} = require('../db/queries/getresults')
const {getArray} = require('../server/helper')


router.get('/:uniqueKey', (req, res) => {
  getPollResults(req.params.uniqueKey)
  .then(pollresults => {
    getPollName(req.params.uniqueKey)
    .then (pollname  => {
    const resultsData = getArray(pollresults,"result")
    const labelsData = getArray(pollresults, "title")
    const surveyName = pollname.name_required
    const user_name = req.session.name
    const templateVars = {resultsData , labelsData,surveyName, user_name };

    res.render("results", templateVars)
  })
  })

  .catch(e => res.send(e));
});



module.exports = router;


