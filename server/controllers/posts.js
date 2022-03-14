const { addPost, upvote, downvote, homePosts } = require('../database/queries');

const addPostHandler = (req, res, next) => {
  const { title, content, userId } = req.body;
  addPost(title, content, userId).then(() => res.json({ message: 'success', status: 201 })).catch((err) => next(err));
};

const upvoteHandler = (req, res, next) => {
  const { postId } = req.params;
  upvote(postId)
    .then(() => res.send()).catch((err) => next(err));
};
const downvoteHandler = (req, res, next) => {
  const { postId } = req.params;
  downvote(postId)
    .then(() => res.send()).catch((err) => next(err));
};

const homePostsHandler = (req, res, next) => {
  homePosts().then((data) => res.json(data.rows)).catch((err) => next(err));
};

module.exports = { addPostHandler, upvoteHandler, downvoteHandler, homePostsHandler };
