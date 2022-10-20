const pool = require('../connection');

const getOptions = function (pollId) {
  return pool
  .query(`
  SELECT options.id, title, name_required
  FROM options
  JOIN polls ON poll_id = polls.id
  WHERE poll_id = $1`, [pollId])
  .then ((result) => {
    console.log(result.rows)
    return result.rows

  })
  .catch((err) => {
    return err.message;
  })
}


const submitOptions = function (voter_name, option_id,rank,poll_id) {
  return pool
  .query( 'INSERT INTO submissions (voter_name , option_id, rank , poll_id) VALUES ($1, $2, $3, $4) RETURNING *;',[voter_name, option_id, rank, poll_id])
  .then ((result) => {
    // console.log(result.rows)
    return result.rows
  })
  .catch((err) => {
    return err.message;
  })
}




module.exports = { getOptions,submitOptions };
