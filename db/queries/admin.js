const pool = require('../connection');
const generateRandomString = require('../../server/helper.js').generateRandomString;




// Admin Page looking at all polls

const adminView =function(user_id) {
  return pool
  .query(`SELECT distinct name_required, polls.id, sub_link, admin_link from polls where polls.user_id = ($1)`, [user_id])
  .then ((result) => {
    console.log("admin Query:" ,result.rows)
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

module.exports = {adminView,deletePoll};

