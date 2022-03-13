const { getUser } = require('../../database/queries');
const {
  signinSchema,
  CustomError,
  comaprePassword,
  jwtAsync,
} = require('../../utils');

const login = (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  let id;
  let username;
  signinSchema
    .validateAsync({ email, password })
    .then(() => getUser(email))
    .then((dbdata) => {
      if (dbdata.rows.length) {
        const { password: dbPassword } = dbdata.rows[0];
        id = dbdata.rows[0].id;
        username = dbdata.rows[0].username;
        return comaprePassword(password, dbPassword);
      }
      throw CustomError('email not found', 400);
    })
    .then((check) => {
      if (check) {
        return jwtAsync({ id, username });
      }
      throw CustomError('password doesnt match', 400);
    })
    .then((token) =>
      res
        .status(201)
        .cookie('token', token)
        .json({ message: 'Success', status: 201 })
    )
    .catch((err) => {
      if (err.details) {
        next(CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = login;
