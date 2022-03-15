const dbconnection = require('../../config/connection');

const userPosts = (username) => dbconnection.query('SELECT posts.id, posts.content, posts.post_date, posts.title,posts.img_post, posts.vote, users.username, users.img FROM posts INNER JOIN users ON users.id = posts.user_id where users.username=$1 ', [username]);

module.exports = userPosts;
