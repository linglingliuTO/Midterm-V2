const db = require('../connection');


const addOptions = (req, poll_id) => {
  const question1 = req.body.option1
  const description1 = req.body.description1
  const question2 = req.body.option2
  const description2 = req.body.description2
  const question3 = req.body.option3
  const description3 = req.body.description3
  const options = {hour: '2-digit', minute: '2-digit', second: '2-digit'};
  const today  = new Date();
  const createdAt = today.toLocaleDateString("en-US", options);


  
  return db.query(
    'INSERT INTO options (title, created_at, poll_id, description) VALUES ($1, $2, $3, $4), ($5, $2, $3, $6 ), ($7, $2, $3, $8) RETURNING *;',
     [question1, createdAt, poll_id, description1, question2, description2, question3, description3])
    .then(data => {
      return data.rows;
    });
};


module.exports = { addOptions };