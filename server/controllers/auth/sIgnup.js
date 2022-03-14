const { addUser, getUser, getUserByname } = require('../../database/queries');
const {
  signupSchema,
  hashPassword,
  CustomError,
  jwtAsync,
} = require('../../utils');

const signup = (req, res, next) => {
  const { username, email, password, img } = req.body;
  signupSchema
    .validateAsync(req.body)
    .then(() => getUser(email))
    .then((data) => {
      const { rowCount } = data;
      if (rowCount) {
        throw CustomError('this email is in use', 409);
      }
      return username;
    })
    .then((name) => getUserByname(name))
    .then((data) => {
      const { rowCount } = data;
      if (rowCount) {
        throw CustomError('this username is in use', 409);
      }
      return password;
    })
    .then((pass) => hashPassword(pass))
    .then((hashedPassword) => addUser(username, email, hashedPassword, img))
    .then((data) => {
      const { id } = data.rows[0];
      return jwtAsync({ id, username });
    })
    .then((token) =>
      res
        .status(201)
        .cookie('token', token)
        .json({ message: 'Success', status: 201 }))
    .catch((err) => {
      if (err.details) {
        next(CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};
module.exports = signup;
