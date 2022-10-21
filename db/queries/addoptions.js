const db = require('../connection');


const addOptions = (question, poll_id, description) => {

  const options = {hour: '2-digit', minute: '2-digit', second: '2-digit'};
  const today  = new Date();
  const createdAt = today.toLocaleDateString("en-US", options);

  return db.query(
    'INSERT INTO options (title, created_at, poll_id, description) VALUES ($1, $2, $3, $4) RETURNING *;',
     [question, createdAt, poll_id, description])
    .then(data => {
      return data.rows;
    });
};


module.exports = { addOptions };
