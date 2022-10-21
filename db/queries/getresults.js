const pool = require('../connection');

// Results Page Obtaining Poll results and putting in graph form

const getPollResults =  function(unique_key) {
  return pool
  .query(`SELECT distinct title, sum(rank) as result from options
  join submissions on options.id = option_id join polls on polls.id = options.poll_id where admin_link = ($1) group by 1;`, [unique_key])
  .then ((result) => {
    console.log(result.rows)
    return result.rows;

  })
  .catch((err) => {
    return err.message;
  })
}

const getPollName =  function(unique_key) {
  return pool
  .query(`SELECT name_required from polls where admin_link = ($1) group by 1;`, [unique_key])
  .then ((result) => {

    return result.rows[0];

  })
  .catch((err) => {
    return err.message;
  })
}

module.exports = { getPollResults,getPollName };
