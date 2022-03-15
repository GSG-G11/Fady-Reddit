const dbconnection = require('../../config/connection');

const homePosts = () => dbconnection.query('SELECT posts.id, posts.content, posts.post_date, posts.title,posts.img_post, posts.vote, users.username, users.img FROM posts INNER JOIN users ON users.id = posts.user_id ORDER BY vote DESC');

module.exports = homePosts;
