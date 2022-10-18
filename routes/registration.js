const express = require('express');
const router  = express.Router();
const {addUser} = require('../server/database')

router.get('/', (req, res) => {
  res.render('registration');
});

router.post('/', (req, res) => {
  const user = req.body;
  console.log(req.body)
  user.password = user.password;
  addUser(user)
  .then(user => {
    if (!user) {
      res.send({error: "error"});
      return;
    }
    req.session.userId = user.id;
    res.send("🤗"); //(redirect to login page)
  })
  .catch(e => res.send(e));
});

module.exports = router;
