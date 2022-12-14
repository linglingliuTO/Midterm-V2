// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8080;
const app = express();


app.use(cookieSession({
  name: 'session',
  keys: ['dinosaur'],
  maxAge: 24 * 60 * 60 * 1000
}));

app.use(cookieSession({
  name: 'session',
  keys: ['thesecrettotheonepieceis'],
}));

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const loginRoutes = require('./routes/login');
const newpollRoutes = require('./routes/newpoll');
const resultsRoutes = require('./routes/results');
const submissionsRoutes = require('./routes/submissions');
const adminRoutes = require('./routes/admin');
// Mount all resource routes
// Note: Feel free to replace the example routes below with your owns
// Note: Endpoints that return data (eg. JSON) usually start with `/api`


app.use('/login', loginRoutes);
app.use('/newpoll', newpollRoutes);
app.use('/results', resultsRoutes);
app.use('/submissions', submissionsRoutes);
app.use('/admin', adminRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/users', (req, res) => {
  res.render('users');
});





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
