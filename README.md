LHL Node Skeleton
=========

## Project Requirements
Option 4: Decision Maker
A web app that helps groups of friends to vote on a preferred choice (using ranked voting), for example: "What movie should we see next Friday?".

Requirements:
a user can create a poll with multiple choices
each choice can have a title and optional description
the creator must enter an email

when a poll is finished being created, the user is given two links: an administrative link (which lets them access the results) and a submission link (which the user sends to their friends)



the links are also sent to the creator via email (using mailgun)
when a user visits the submission link, they enter their name if required and see a list of the choices for that poll
the user can rank the choices (by drag and drop, or some other method) and then submits the poll
each time a submission is received, the creator is notified with an email (which includes the administrative link and a link to the results)
the results are ranked using the Borda Count method: https://en.wikipedia.org/wiki/Borda_count
note: this app does not follow the typical user authentication process: voters don't need to register or log in and the only way to access the polls or see the results is via links


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- charts.js 


## Seeding database
\i db/schema/02_polls.sql
\i db/seeds/02_polls.sql
\i db/schema/03_options.sql
\i db/seeds/03_options.sql
 \i db/schema/04_submissions.sql
 \i db/seeds/04_submissions.sql
