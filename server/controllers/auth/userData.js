const { verifyToken } = require('../../utils');

const userData = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.json({ message: 'no user is signed in', status: 400 });
  } else {
    verifyToken(token, process.env.PRIVATE_KEY).then((decodedToken) => {
      res.json(decodedToken);
    }).catch((err) => next(err));
  }
};

module.exports = userData;
