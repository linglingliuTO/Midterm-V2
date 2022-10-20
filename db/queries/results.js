const pool = require('../connection');

// Results Page Obtaining Poll results and putting in graph form

const getPollResults =  function(poll_id) {
  return pool
  .query(`SELECT distinct title, sum(rank) as result from options
  join submissions on options.id = option_id
   where options.poll_id = ($1) group by 1;`, [poll_id])
  .then ((result) => {
    return result.rows;

  })
  .catch((err) => {
    return err.message;
  })
}

const getPollName =  function(poll_id) {
  return pool
  .query(`SELECT name_required from polls where polls.id = ($1) group by 1;`, [poll_id])
  .then ((result) => {

    return result.rows[0];

  })
  .catch((err) => {
    return err.message;
  })
}

module.exports = { getPollResults,getPollName };
