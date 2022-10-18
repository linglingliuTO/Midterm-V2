-- Drop and recreate Widgets table (Example)

DROP TABLE IF EXISTS submissions CASCADE;
CREATE TABLE submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  voter_name varchar(255) NOT NULL,
  option_id INTEGER REFERENCES options(id) ON DELETE CASCADE,
  rank integer,
  poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE
);
