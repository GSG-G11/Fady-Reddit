const { verifyToken, CustomError } = require('../utils');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw CustomError('Unauthrorized', 401);
  } else {
    verifyToken(token, process.env.PRIVATE_KEY).then((decodedToken) => {
      req.userId = decodedToken.id;
      next();
    }).catch((err) => next(err));
  }
};

module.exports = checkAuth;
