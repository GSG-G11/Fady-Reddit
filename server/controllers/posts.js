const { addPost } = require('../database/queries');

const addPostHandler = (req, res, next) => {
  const { title, content, userId } = req.body;
  addPost(title, content, userId).then(() => res.json({ message: 'success', status: 201 })).catch((err) => next(err));
};
module.exports = addPostHandler;
