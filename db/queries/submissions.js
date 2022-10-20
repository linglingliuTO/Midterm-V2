const db = require('../connection');
const generateRandomString = require('../../server/helper.js').generateRandomString;


const addPoll = (req) => {
  const sub_link = generateRandomString();
  const admin_link = generateRandomString();
  return db.query(
    'INSERT INTO polls (user_id, sub_link, admin_link, name_required) VALUES ($1, $2, $3, $4) RETURNING *;',
     [req.session.userId, sub_link, admin_link, 'true'])
    .then(data => {
      return data.rows;
    });
};


module.exports = { addPoll };
