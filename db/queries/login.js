const pool = require('../connection');

const getUserWithEmail = function (email) {
  console.log(email)
  return pool
    .query(`SELECT * FROM users WHERE email = $1`, [`${email.trim()}`])
    .then ((result) => {
      return result.rows[0]
    })
    .catch((err) => {
      return err.message;
    })
};

// const addUser =  function(user) {
//   return pool
//   .query(`INSERT INTO users (registered, email, password, name) VALUES ($1,$2,$3, $4) RETURNING *`, [true, user.email, user.password, user.name])
//   .then ((result) => {
//     return result.rows[0].id
//   })
//   .catch((err) => {
//     return err.message;
//   })
// }


module.exports = { getUserWithEmail};
