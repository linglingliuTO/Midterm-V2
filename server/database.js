const { Pool } = require('pg');
const { getUsers } = require('../db/queries/users');
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
console.log(process.env)
pool.connect()

const addUser =  function(user) {
  return pool
  .query(`INSERT INTO users (registered, email, password, name) VALUES ($1,$2,$3, $4) RETURNING *`, [true, user.email, user.password, user.name])
  .then ((result) => {
    return result.rows[0].id
  })
  .catch((err) => {
    return err.message;
  })
}

// Results Page Obtaining Poll results and putting in graph form

const getPollResults =  function(poll_id) {
  return pool
  .query(`SELECT distinct title, sum(rank) as result from options join submissions on options.id = option_id where options.poll_id = ($1) group by 1;`, [poll_id])
  .then ((result) => {
    return result.rows;
  })
  .catch((err) => {
    return err.message;
  })
}



// Admin Page looking at all polls

const adminView =function(user_id) {
  return pool
  .query(`SELECT distinct name_required, polls.id, sub_link, admin_link, count(distinct_voters) as num_voted from polls join (SELECT DISTINCT voter_name as distinct_voters, poll_id from submissions) as sub on polls.id = poll_id where polls.user_id = ($1) group by 1,2,3;`, [user_id])
  .then ((result) => {
    return result.rows;
  })
  .catch((err) => {
    return err.message;
  })
}


// delete record on admin page

const deletePoll =  function(poll_id, user_id) {
  return pool
  .query(`DELETE FROM polls WHERE polls.id = ($1) and user_id = ($2) RETURNING *`, [poll_id, user_id])
  .then ((result) => {
    return result.rows;
  })
  .catch((err) => {
    return err.message;
  })
}



// insert new records from form

const addsurvey =  function(user) {
  return pool
  .query(`INSERT INTO polls (user, sub_link, admin_link, name_required) VALUES ($1,$2,$3,$4) RETURNING *`, [true, user.email, user.password, user.name])
  .then ((result) => {
    return result.rows[0].id
  })
  .catch((err) => {
    return err.message;
  })
}

const getOptions = function (pollId) {
  return pool
  .query(`
  SELECT title, name_required
  FROM options 
  JOIN polls ON poll_id = polls.id
  WHERE poll_id = $1`, [pollId])
  .then ((result) => {
    return result.rows
  })
  .catch((err) => {
    return err.message;
  })
}


module.exports = {addUser,getPollResults,adminView,deletePoll,getOptions};
