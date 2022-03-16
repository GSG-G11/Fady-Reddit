const {
  addPost,
  upvote,
  downvote,
  homePosts,
  deletePost,
  userPosts,
} = require('../database/queries');
const { CustomError } = require('../utils');

const addPostHandler = (req, res, next) => {
  const { userId } = req;
  const { title, content, img } = req.body;
  addPost(title, content, userId, img)
    .then(() => res.json({ message: 'success', status: 201 }))
    .catch((err) => next(err));
};

const upvoteHandler = (req, res, next) => {
  const { postId } = req.params;
  upvote(postId)
    .then(() => res.json({ message: 'upvoted', status: 201 }))
    .catch((err) => next(err));
};
const downvoteHandler = (req, res, next) => {
  const { postId } = req.params;
  downvote(postId)
    .then(() => res.json({ message: 'downvoted', status: 201 }))
    .catch((err) => next(err));
};

const homePostsHandler = (req, res, next) => {
  homePosts()
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

const deletePostHandler = (req, res, next) => {
  const { userId } = req;
  const { postId } = req.params;
  deletePost(postId, userId)
    .then((data) => {
      if (!data.rowCount) { throw CustomError('unauthroized', 401); } else {
        res.json({ message: 'deleted', status: 201 });
      }
    })
    .catch((err) => next(err));
};
const userPostshandler = (req, res, next) => {
  const { username } = req.params;
  userPosts(username)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = {
  addPostHandler,
  upvoteHandler,
  downvoteHandler,
  homePostsHandler,
  deletePostHandler,
  userPostshandler,
};
