const { getUserByname } = require('../../database/queries');
const { verifyToken } = require('../../utils');

const userData = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.json({ message: 'no user is signed in', status: 400 });
  } else {
    verifyToken(token, process.env.PRIVATE_KEY)
      .then((decodedToken) => decodedToken.username)
      .then((name) => getUserByname(name))
      .then((data) => res.json(data.rows[0]))
      .catch((err) => next(err));
  }
};

module.exports = userData;
