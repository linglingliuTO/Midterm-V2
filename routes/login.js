const express = require('express');
const router  = express.Router();
const {addUser} = require('../server/database')

router.get('/', (req, res) => {
  res.render('login');
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
    res.redirect("/newpoll");
  })
  .catch(e => res.send(e));
});

module.exports = router;
