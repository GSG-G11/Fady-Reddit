BEGIN;

DROP TABLE IF EXISTS users, posts ,comments CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(500) UNIQUE,
    username VARCHAR(500) UNIQUE ,
    password VARCHAR(100) NOT NULL,
    img TEXT DEFAUlT 'https://socialmediaweek.org/wp-content/blogs.dir/1/files/reddit.jpg'
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    vote INTEGER DEFAULT 0,
    img_post TEXT,
    post_date TIMESTAMP NOT NULL DEFAULT NOW(),
    user_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  content TEXT NOT NULL
);

COMMIT;