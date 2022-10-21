const db = require('../connection');
const generateRandomString = require('../../server/helper.js').generateRandomString;


const addPoll = (user_id, sub_link, admin_link, name_required) => {

  return db.query(
    'INSERT INTO polls (user_id, sub_link, admin_link, name_required) VALUES ($1, $2, $3, $4) RETURNING *;',
     [user_id, sub_link, admin_link, name_required])
    .then(data => {
      return data.rows;
    });
};


module.exports = { addPoll };
