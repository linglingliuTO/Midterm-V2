-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS polls CASCADE;
CREATE TABLE polls (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  sub_link TEXT NOT NULL,
  admin_link TEXT NOT NULL,
  name_required VARCHAR(255) NOT NULL
);
