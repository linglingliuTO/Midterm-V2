-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS options CASCADE;
CREATE TABLE options (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
  description TEXT
);
