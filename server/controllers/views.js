const { join } = require('path');

const loginPage = (req, res) => {
  const file = join(__dirname, '..', '..', 'public/html/login.html');
  res.sendFile(file);
};
const signupPage = (req, res) => {
  const file = join(__dirname, '..', '..', 'public/html/signup.html');
  res.sendFile(file);
};
const profile = (req, res) => {
  const file = join(__dirname, '..', '..', 'public/html/signup.html');
  res.sendFile(file);
};
module.exports = { loginPage, signupPage, profile };
