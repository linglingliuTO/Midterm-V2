const express = require('express');
const router  = express.Router();
const {getUserWithEmail} = require('../db/queries/login')

router.get('/', (req, res) => {
  res.render('login');
});

// app.get("/", (req, res) => {
//   const user = users[req.session["user_id"]];
//   if (!user) { //redirect user to login if they are not logged in
//     res.redirect("/login");
//   }
//   res.redirect("/newpoll"); //redirects user to urls if logged in already
// });

// module.exports = router;

// app.get("/login", (req, res) => {
//   const user = users[req.session["user_id"]];
//   const templateVars = {
//     user: user,
//   };
//   if (user) {
//     res.redirect("/newpoll");
//     return;
//   }
//   res.render("login", templateVars);
// });

  const login =  function(email, password) {
    console.log(getUserWithEmail(email))
    return getUserWithEmail(email)
    // (user => {
    //   if (password = user.password) {
    //     return user;
    //   }
    //   return null;
    // });
  }
  // exports.login = login;

  router.post('/', (req, res) => {
    const {email, password} = req.body;
    console.log(email, password)
    login(email, password)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        req.session.email = user.email;
        req.session.id = user.id;
        req.session.name = user.name
        console.log(req.session.id, req.session.name, req.session.email)
        // res.send({user: {name: user.name, email: user.email, id: user.id}});
        res.redirect("/newpoll")
      })
      .catch(e => res.send(e));
  });

  router.post('/logout', (req, res) => {
    req.session.email = null;
    req.session.id = null;
    req.session.name = null;
    res.redirect("/")

  });

//   router.get("/me", (req, res) => {
//     const userId = req.session.userId;
//     if (!userId) {
//       res.send({message: "not logged in"});
//       return;
//     }

//     database.getUserWithId(userId)
//       .then(user => {
//         if (!user) {
//           res.send({error: "no user with that id"});
//           return;
//         }

//         res.send({user: {name: user.name, email: user.email, id: userId}});
//       })
//       .catch(e => res.send(e));
//   });

//   return router;
// }

module.exports = router;
