const pool = require('../connection');

const getOptions = function (unique_key) {
  return pool
  .query(`
  SELECT options.id, title, name_required, polls.id as poll_id
  FROM options
  JOIN polls ON poll_id = polls.id
  WHERE sub_link = $1`, [unique_key])
  .then ((result) => {
    return result.rows

  })
  .catch((err) => {
    return err.message;
  })
}


const submitOptions = function (voter_name, option_id,rank,poll_id) {
  return pool
  .query( 'INSERT INTO submissions (voter_name, option_id, rank, poll_id) VALUES ($1, $2, $3, $4) RETURNING *;',[voter_name, option_id, rank, poll_id])
  .then ((result) => {
    return result.rows
  })
  .catch((err) => {
    return err.message;
  })
}


const getLinks = function (poll_id) {
  return pool
  .query( `SELECT sub_link, admin_link, name_required, email, name from polls left join users on polls.user_id = users.id where polls.id = $1` ,[poll_id])
  .then ((result) => {
    return result.rows
  })
  .catch((err) => {
    return err.message;
  })
}



module.exports = { getOptions,submitOptions,getLinks };
