const { addComment, getComments, deleteComment } = require('../database/queries');
const { CustomError } = require('../utils');

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
const deleteCommentHandler = (req, res, next) => {
  const { userId } = req;
  const { commentId } = req.params;
  deleteComment(commentId, userId)
    .then((data) => {
      if (!data.rowCount) { throw CustomError('unauthroized', 401); } else {
        res.json({ message: 'deleted', status: 200 });
      }
    })
    .catch((err) => next(err));
};

module.exports = { addCommentHandler, getCommentsHandler, deleteCommentHandler };
