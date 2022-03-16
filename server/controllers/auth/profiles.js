const { getUserByname } = require('../../database/queries');

const profileData = (req, res, next) => {
  const { username } = req.params;

  getUserByname(username)
    .then((data) => res.json(data.rows[0]))
    .catch((err) => next(err));
};
module.exports = profileData;
