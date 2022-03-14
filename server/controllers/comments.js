const { addComment, getComments } = require('../database/queries');

const addCommentHandler = (req, res, next) => {
  const { userId } = req;
  const { content } = req.body;
  const { postId } = req.params;
  addComment(content, postId, userId)
    .then(() => res.json({ message: 'success', status: 201 }))
    .catch((err) => next(err));
};

const getCommentsHandler = (req, res, next) => {
  const { postId } = req.params;
  getComments(postId)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};
module.exports = { addCommentHandler, getCommentsHandler };
